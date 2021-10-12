import React, { useState, useEffect } from 'react'
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
    StyledInputBase,
    ProductsContainer,
    PageNav
} from './Shop.elements.js'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import SearchIcon from '@mui/icons-material/Search'
import SmallCard from '../SmallCard/SmallCard'
import classes from '../../screens/HomeScreen/TrendingSection.module.css'
import Pagination from '@mui/material/Pagination'
import Stack from '@mui/material/Stack'
import { useDispatch, useSelector } from 'react-redux'
import { getProducts } from '../../actions/productActions'
import Loader from "../../components/Loader"
import Message from "../../components/Message"

const Shop = () => {
    const dispatch = useDispatch()
    const [page, setPage] = useState(1)
    const [sortBy, setSortBy] = useState('')
    const [categoryFilter, setCategoryFilter] = useState('')
    const [colorFilter, setColorFilter] = useState('')
    const [priceFilter, setPriceFilter] = useState('')

    useEffect(() => {
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, sortBy, page))
      }, [dispatch])
    
    const productAll = useSelector((state) => state.productAll);
    const { 
        loading,
        error,
        products,
        pageCount,
        electronicsCount,
        menCount,
        womenCount,
        sportsCount,
        babyCount,
        automobileCount,
        booksCount,
        gamesCount,
        blackCount,
        blueCount,
        redCount,
        greenCount,
        brownCount,
        hundreadCount,
        okCount,
        tkCount,
        thkCount,
        fkCount,
        fikCount
    } = productAll;

    const selectHandler = (e) => {
        setSortBy(e.target.value)
        setPage(1)
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, e.target.value, page))
    }

    const pageHandler = (e, value) => {
        setPage(value)
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, sortBy, value))
    }

    const categoryHandler = (e) => {
        setPage(1)
        setSortBy('')
        setCategoryFilter(e.target.value)
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, sortBy, page))
    }

    const colorHandler = (e) => {
        setPage(1)
        setSortBy('')
        setColorFilter(e.target.value)
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, sortBy, page))
    }

    const priceHandler = (e) => {
        setPage(1)
        setSortBy('')
        setPriceFilter(e.target.value)
        dispatch(getProducts(categoryFilter, colorFilter, priceFilter, sortBy, page))
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
                                <CategoryForm>
                                    <FormList>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label1" value="electronics" name="categories" onClick={categoryHandler}/>
                                                Electronics ({electronicsCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label2" value="men" name="categories" onClick={categoryHandler} />
                                                Mens Fashion ({menCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label3" value="women" name="categories" onClick={categoryHandler} />
                                                Womens Fashion ({womenCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label4" value="sports" name="categories" onClick={categoryHandler} />
                                                Sports, Fitness ({sportsCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label5" value="baby" name="categories" onClick={categoryHandler} />
                                                Baby Products, Toys ({babyCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label6" value="automobile" name="categories" onClick={categoryHandler} />
                                                Automobile ({automobileCount})
                                            </FilterLabel>
                                        </FormListItem>
                                        <FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label7" value="books" name="categories" onClick={categoryHandler} />
                                                Books ({booksCount})
                                            </FilterLabel>
                                        </FormListItem><FormListItem>
                                            <FilterLabel>
                                                <FilterSelection type="radio" id="label8" value="games" name="categories" onClick={categoryHandler} />
                                                Board Games, Video Games ({gamesCount})
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
                                    <CategoryForm>
                                        <FormList>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color1" value="black" name="colorFilters" onClick={colorHandler} />
                                                    Black ({blackCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color2" value="blue" name="colorFilters" onClick={colorHandler} />
                                                    Blue ({blueCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color3" value="red" name="colorFilters" onClick={colorHandler} />
                                                    Red ({redCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color4" value="green" name="colorFilters" onClick={colorHandler} />
                                                    Green ({greenCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="color5" value="brown" name="colorFilters" onClick={colorHandler} />
                                                    Brown ({brownCount})
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
                                    <CategoryForm>
                                        <FormList>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price1" value="price1" name="PriceFilters" onClick={priceHandler} />
                                                    $0 - $999 ({hundreadCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price2" value="price2" name="PriceFilters" onClick={priceHandler} />
                                                    $1000 - $2499 ({okCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price3" value="price3" name="PriceFilters" onClick={priceHandler} />
                                                    $2500 - $4999 ({tkCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price4" value="price4" name="PriceFilters" onClick={priceHandler} />
                                                    $5000 - $7999 ({thkCount})
                                                </FilterLabel>
                                            </FormListItem>
                                            <FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price5" value="price5" name="PriceFilters" onClick={priceHandler} />
                                                    $8000 - $9999 ({fkCount})
                                                </FilterLabel>
                                            </FormListItem><FormListItem>
                                                <FilterLabel>
                                                    <FilterSelection type="radio" id="price5" value="price5" name="PriceFilters" onClick={priceHandler} />
                                                    $10000 and Above ({fikCount})
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
                                    <MenuItem value={"new"}>Newest First</MenuItem>
                                    <MenuItem value={"old"}>Oldest First</MenuItem>
                                    <MenuItem value={"popular"}>Popular First</MenuItem>
                                    <MenuItem value={"low"}>Price: Low to High</MenuItem>
                                    <MenuItem value={"high"}>Price: High to Low</MenuItem>
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
                    <ProductsContainer>
                    {loading ? (
                        <Loader />
                    ) : error ? (
                        <Message>{error}</Message>
                    ) : (
                        <div className={classes.showcase}>
                        {(products != null && products.length > 0)? (products.map((product) => (
                            <SmallCard key={product._id} product={product} />
                        ))) : (<Message variant={"danger"}>Error Loading Products</Message>)}
                        </div>
                    )}
                        <PageNav>
                            <Stack spacing={2}>
                                <Pagination count={pageCount} size="large" page={page} onChange={pageHandler}/>
                            </Stack>
                        </PageNav>
                    </ProductsContainer>
                </MainContent>
            </ShopContent>
            <Subscribe />
        </div>
    )
}

export default Shop
