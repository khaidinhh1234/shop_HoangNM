import { useState } from "react";
import { Input, Button, List } from "antd";
import instance from "@/configs/axios";

const SearchComponent = () => {
  const [search, setSearch] = useState<string>("");
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [isInputEmpty, setIsInputEmpty] = useState<boolean>(false);

  const handleSearch = async () => {
    if (!search.trim()) {
      setIsInputEmpty(true);
      return;
    }

    setLoading(true);
    setError(null);
    setIsInputEmpty(false);

    try {
      const response = await instance.get("/v1/search", {
        params: { keyword: search },
      });
      setResults(response.data);
      if (response.data.length === 0) {
        setError("Không tìm thấy sản phẩm nào.");
      }
    } catch (err) {
      setError("Có lỗi xảy ra khi tìm kiếm.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 p-4">
      <div className="flex items-center space-x-2">
        <Input
          placeholder="Nhập từ khóa tìm kiếm..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onPressEnter={handleSearch}
          className={`w-96 h-12 px-4 border ${
            isInputEmpty ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        <Button
          type="primary"
          onClick={handleSearch}
          loading={loading}
          className="h-12 btn btn-primary"
        >
          Tìm kiếm
        </Button>
      </div>

      {isInputEmpty && (
        <div className="text-red-500">Vui lòng nhập từ khóa tìm kiếm.</div>
      )}
      {error && <div className="text-red-500">{error}</div>}

      <List
        className="w-full"
        dataSource={results}
        renderItem={(item) => (
          <div className="flex items-center mb-4 p-4 border border-gray-300 rounded-md">
            <img
              src={item.feature_image}
              alt={item.name}
              className="w-24 h-24 object-cover rounded-md mr-4"
            />
            <div>
              <div className="font-semibold text-lg">{item.name}</div>
              <div className="text-gray-600">
                Price: {item.regular_price} VND
              </div>
            </div>
          </div>
        )}
      />
    </div>
  );
};

export default SearchComponent;
