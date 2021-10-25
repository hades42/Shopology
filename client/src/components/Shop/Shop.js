import React, { useState, useEffect } from "react";
import Subscribe from "../../screens/HomeScreen/Subscribe";
import Hit from "../Hit/Hit";
import {
  ShopContent,
  SideBar,
  SideBarCategories,
  CategoryHeading,
  CategoryList,
  CategoryListItem,
  SidebarFilters,
  SidebarFilterHeading,
  ProductFilter,
  FilterHeading,
  MainContent,
  FilterBar,
  ProductsContainer,
  PageNav,
} from "./Shop.elements.js";
import Stack from "@mui/material/Stack";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../actions/productActions";
import Loader from "../../components/Loader";
import Message from "../../components/Message";
import algoliasearch from "algoliasearch/lite";
import {
  InstantSearch,
  SearchBox,
  Hits,
  Configure,
  Pagination,
  RefinementList,
  SortBy,
} from "react-instantsearch-dom";
import CustomRangeSlider from "./RangeSlider";

const searchClient = algoliasearch(
  "1DJGILANZV",
  "77b1863a8ff2cc9f55a1130f37842ae4"
);

const Shop = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("");
  const [categoryFilter, setCategoryFilter] = useState("");
  const [colorFilter, setColorFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  const [search, setSearch] = useState("");
  useEffect(() => {
    dispatch(
      getProducts(
        search,
        categoryFilter,
        colorFilter,
        priceFilter,
        sortBy,
        page
      )
    );
  }, [dispatch]);

  const productAll = useSelector((state) => state.productAll);
  const { loading, error } = productAll;

  return (
    <div>
      <InstantSearch indexName="ecommercial_app" searchClient={searchClient}>
        <ShopContent>
          <SideBar>
            <SideBarCategories>
              <CategoryHeading>Browse Categories</CategoryHeading>
              <CategoryList>
                <CategoryListItem>
                  <RefinementList attribute="category" />
                </CategoryListItem>
              </CategoryList>
            </SideBarCategories>
            <SidebarFilters>
              <SidebarFilterHeading>Product Filters</SidebarFilterHeading>
              <ProductFilter>
                <FilterHeading>Brand</FilterHeading>
                <CategoryList>
                  <CategoryListItem>
                    <RefinementList attribute="brand" />
                  </CategoryListItem>
                </CategoryList>
              </ProductFilter>
              <ProductFilter>
                <FilterHeading>Price</FilterHeading>
                <CategoryList>
                  <CategoryListItem>
                    <CustomRangeSlider attribute="price" />
                  </CategoryListItem>
                </CategoryList>
              </ProductFilter>
            </SidebarFilters>
          </SideBar>
          <MainContent>
            <FilterBar>
              <SortBy
                defaultRefinement="ecommercial_app"
                className="me-3"
                items={[
                  { value: "ecommercial_app", label: "Features" },
                  { value: "price_asc", label: "Price asc." },
                  { value: "price_desc", label: "Price desc." },
                ]}
              />
              <SearchBox className="w-50" />
            </FilterBar>
            <ProductsContainer>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message>{error}</Message>
              ) : (
                <>
                  <Configure hitsPerPage={12} />
                  <Hits hitComponent={Hit} />
                </>
              )}
              <PageNav>
                <Stack spacing={2}>
                  <Pagination />
                </Stack>
              </PageNav>
            </ProductsContainer>
          </MainContent>
        </ShopContent>
      </InstantSearch>
      <Subscribe />
    </div>
  );
};

export default Shop;
