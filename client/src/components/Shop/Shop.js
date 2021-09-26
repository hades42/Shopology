import React from 'react'
import Subscribe from '../../screens/HomeScreen/Subscribe'
import {
    ShopCategory,
    ShopBanner,
    ShopDesc,
    ShopDescHome,
    ShopDescCategory,
    ShopContent,
    SideBar,
    SideBarCategories,
    CategoryHeading,
    CategoryList,
    CategoryListItem,
    CategoryForm,
    FormList,
    FormListItem,
    FilterSelection,
    FilterLabel,
    SidebarFilters,
    SidebarFilterHeading,
    ProductFilter,
    FilterHeading,
    PriceRangeContainer,
    MainContent,
    FilterBar,
    Sorting,
    SortingSelector,
    SortingOptions,
    SortingDefault
} from './Shop.elements.js'

const Shop = () => {
    
    return (
        <div>
            <ShopCategory>
                <ShopBanner>
                    Shop Category
                </ShopBanner>
                <ShopDesc>
                    <ShopDescHome to="/">
                        Home
                    </ShopDescHome>
                    <ShopDescCategory />
                </ShopDesc>
            </ShopCategory>
            <ShopContent>
                <SideBar>
                    <SideBarCategories>
                        <CategoryHeading>
                            Browse Categories
                        </CategoryHeading>
                        <CategoryList>
                            <CategoryListItem>
                                <CategoryForm action="#">
                                    <FormList>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label1" value="label1" name="categories" />
                                                Label - 1 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label2" value="label2" name="categories" />
                                                Label - 2 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label3" value="label3" name="categories" />
                                                Label - 3 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label4" value="label4" name="categories" />
                                                Label - 4 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label5" value="label5" name="categories" />
                                                Label - 5 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label6" value="label6" name="categories" />
                                                Label - 6 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label7" value="label7" name="categories" />
                                                Label - 7 (0)
                                            </FilterLabel>
                                        </FormListItem>
                                    </FormList>
                                </CategoryForm>
                            </CategoryListItem>
                        </CategoryList>
                    </SideBarCategories>
                    <SidebarFilters>
                        <SidebarFilterHeading>
                            Product Filters
                        </SidebarFilterHeading>
                        <ProductFilter>
                            <FilterHeading>
                                Brands
                            </FilterHeading>
                            <CategoryList>
                                <CategoryListItem>
                                    <CategoryForm action="#">
                                        <FormList>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="brand1" value="brand1" name="filters" />
                                                    Brand - 1 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="brand2" value="brand2" name="filters" />
                                                    Brand - 2 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="brand3" value="brand3" name="filters" />
                                                    Brand - 3 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="brand4" value="brand4" name="filters" />
                                                    Brand - 4 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="brand5" value="brand5" name="filters" />
                                                    Brand - 5 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                        </FormList>
                                    </CategoryForm>
                                </CategoryListItem>
                            </CategoryList>
                        </ProductFilter>
                        <ProductFilter>
                            <FilterHeading>
                                Colour
                            </FilterHeading>
                            <CategoryList>
                                <CategoryListItem>
                                    <CategoryForm action="#">
                                        <FormList>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color1" value="color1" name="filters" />
                                                    Colour - 1 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color2" value="color2" name="filters" />
                                                    Colour - 2 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color3" value="color3" name="filters" />
                                                    Colour - 3 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color4" value="color4" name="filters" />
                                                    Colour - 4 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color5" value="color5" name="filters" />
                                                    Colour - 5 (0)
                                                </FilterLabel>
                                            </FormListItem>
                                        </FormList>
                                    </CategoryForm>
                                </CategoryListItem>
                            </CategoryList>
                        </ProductFilter>
                        <ProductFilter>
                            <FilterHeading>
                                Price
                            </FilterHeading>
                            <PriceRangeContainer>
                                
                            </PriceRangeContainer>
                        </ProductFilter>
                    </SidebarFilters>
                </SideBar>
                <MainContent>
                    <FilterBar>
                        <Sorting>
                            <SortingSelector>
                                <SortingOptions value="0" >Default Sorting</SortingOptions>
                                <SortingOptions value="1" >Price: Low to High</SortingOptions>
                                <SortingOptions value="2" >Price: High to Low</SortingOptions>
                                <SortingOptions value="3" >Avg. Customer Review</SortingOptions>
                                <SortingOptions value="3" >Newest Arrivals</SortingOptions>
                            </SortingSelector>
                            <SortingDefault>
                                <span>Default Sorting</span>
                                <ul>
                                    <li data-value="0">Default Sorting</li>
                                    <li data-value="1">Price: Low to High</li>
                                    <li data-value="2">Price: High to Low</li>
                                    <li data-value="3">Avg. Customer Review</li>
                                    <li data-value="4">Newest Arrivals</li>
                                </ul>
                            </SortingDefault>
                        </Sorting>
                    </FilterBar>
                </MainContent>
            </ShopContent>
            <Subscribe />
        </div>
    )
}

export default Shop
