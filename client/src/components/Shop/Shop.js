import React, { useState } from 'react'
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
    MainContent,
    FilterBar,
    Sorting,
    Search,
    SearchIconWrapper,
    StyledInputBase
} from './Shop.elements.js'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import SearchIcon from '@mui/icons-material/Search';

const Shop = () => {
    const [sortBy, setSortBy] = useState('')
    const selectHandler = (e) => {
        setSortBy(e.target.value)
    }
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
                            <CategoryList> 
                                <CategoryListItem>
                                    <CategoryForm action="#">
                                        <FormList>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price1" value="price1" name="filters" />
                                                    $0 - $999
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price2" value="price2" name="filters" />
                                                    $1000 - $2499
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price3" value="price3" name="filters" />
                                                    $2499 - $4999
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price4" value="price4" name="filters" />
                                                    $5000 - $8000
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price5" value="price5" name="filters" />
                                                    $8000 - ∞
                                                </FilterLabel>
                                            </FormListItem>
                                        </FormList>
                                    </CategoryForm>
                                </CategoryListItem>
                            </CategoryList>
                        </ProductFilter>
                    </SidebarFilters>
                </SideBar>
                <MainContent>
                    <FilterBar>
                        <Sorting>
                            <FormControl fullWidth>
                                <InputLabel id="sortBy-label">Sort</InputLabel>
                                <Select
                                    labelId="sortBy-label"
                                    id="sortBy" 
                                    value={sortBy} 
                                    label = "Sort" 
                                    onChange={selectHandler}
                                    style={{'background': '#fff'}}
                                >
                                    <MenuItem value={1}>Option - 1</MenuItem>
                                    <MenuItem value={2}>Option - 2</MenuItem>
                                    <MenuItem value={3}>Option - 3</MenuItem>
                                    <MenuItem value={4}>Option - 4</MenuItem>
                                </Select>
                            </FormControl>     
                        </Sorting>
                        <Search>
                            <SearchIconWrapper>
                            <SearchIcon style={{'z-index': '1'}}/>
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>    
                    </FilterBar>
                </MainContent>
            </ShopContent>
            <Subscribe />
        </div>
    )
}

export default Shop
