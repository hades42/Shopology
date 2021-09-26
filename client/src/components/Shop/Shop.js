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
    Products,
    SideBarCategories,
    CategoryHeading,
    CategoryList,
    CategoryListItem,
    CategoryForm,
    FormList,
    FormListItem,
    FilterSelection,
    FilterLabel,
    RadioSelection
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
                </SideBar>
                <Products />
            </ShopContent>
            <Subscribe />
        </div>
    )
}

export default Shop
