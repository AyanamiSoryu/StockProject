import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import { filterProducts, getIds, getItems } from '../../../../utils/Api/Api';
import Loader from '../../atoms/Loader/Loader';
import Filter from '../../organisms/Filter/Filter';
import Pagination from '../../organisms/Pagination/Pagination';
import ProductList from '../../organisms/ProductList/ProductList';

const RootContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const FilterAndProductList: React.FC = () => {
  const [loading, setLoading] = useState(true); // Состояние загрузки
  const [productIds, setProductIds] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const fetchData = async (offset: number, limit: number) => {
    try {
      const ids = await getIds(offset, limit);
      setProductIds(ids);
    } catch (error) {
      console.error('Error fetching product IDs:', error);
      await fetchData(offset, limit);
    }
  };

  const fetchProducts = async () => {
    setLoading(true);
    const startIndex = (currentPage - 1) * 50;
    const endIndex = startIndex + 50;
    const idsSlice = productIds.slice(startIndex, endIndex);

    try {
      const data = await getItems(idsSlice);
      if (data.length > 0) {
        setProducts(data);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
      await fetchProducts();
    } finally {
      setLoading(false);
    }
  };

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleFilterChange = async (filters: { [key: string]: string | number }) => {
    setLoading(true);
    if (Object.values(filters).every((value) => !value || value === '')) {
      fetchData(0, 1000000000);
      fetchProducts();
    } else {
      try {
        const filteredIds = await filterProducts(filters);
        setProductIds(filteredIds);
        setCurrentPage(1);
      } catch (error) {
        console.error('Error filtering products:', error);
        const filteredIds = await filterProducts(filters);
        setProductIds(filteredIds);
        setCurrentPage(1);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchData(0, 1000000000);
  }, []);

  useEffect(() => {
    if (productIds.length > 0) {
      fetchProducts();
    }
  }, [currentPage, productIds]);

  useEffect(() => {
    setTotalPages(Math.ceil(productIds.length / 50));
  }, [productIds]);

  return (
    <RootContainer>
      <Filter onFilterChange={handleFilterChange} />
      {products.length === 0 || loading ? <Loader /> : null}
      {products.length === 0 ? null : <ProductList products={products} />}
      {products.length === 0 ? null : (
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
      )}
    </RootContainer>
  );
};

export default FilterAndProductList;
