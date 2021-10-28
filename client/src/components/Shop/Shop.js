import React from "react";
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
  SearchAndFilters,
  MobileFilterBar,
  MobileProducts,
  MobileFilterButton,
  MobileFilterOverlay,
  CloseOverlay,
} from "./Shop.elements.js";
import Stack from "@mui/material/Stack";
import { useSelector } from "react-redux";
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
  let mobile = false;

  if (window.screen.width < 1000) {
    mobile = true;
  } else {
    mobile = false;
  }

  const productAll = useSelector((state) => state.productAll);
  const { loading, error } = productAll;

  const overlayHandler = () => {
    if (document.getElementById("overlay").style.display === "block") {
      document.getElementById("overlay").style.display = "none";
    } else {
      document.getElementById("overlay").style.display = "block";
    }
  };

  return (
    <>
      <InstantSearch indexName="ecommercial_app" searchClient={searchClient}>
        {mobile ? (
          <>
            <SearchAndFilters>
              <SearchBox />
              <MobileFilterBar>
                <MobileFilterButton onClick={overlayHandler}>
                  Category Filters
                </MobileFilterButton>
                <MobileFilterOverlay id="overlay">
                  <CloseOverlay onClick={overlayHandler} />
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
                </MobileFilterOverlay>
                <SortBy
                  defaultRefinement="ecommercial_app"
                  className="me-3"
                  items={[
                    { value: "ecommercial_app", label: "Features" },
                    { value: "price_asc", label: "Price asc." },
                    { value: "price_desc", label: "Price desc." },
                  ]}
                />
              </MobileFilterBar>
            </SearchAndFilters>
            <MobileProducts>
              {loading ? (
                <Loader />
              ) : error ? (
                <Message>{error}</Message>
              ) : (
                <>
                  <Configure hitsPerPage={8} />
                  <Hits hitComponent={Hit} />
                </>
              )}
              <PageNav>
                <Stack spacing={2}>
                  <Pagination />
                </Stack>
              </PageNav>
            </MobileProducts>
          </>
        ) : (
          <>
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
          </>
        )}
      </InstantSearch>
      <Subscribe />
    </>
  );
};

export default Shop;
