import styled, { keyframes } from "styled-components";
import { Link } from 'react-router-dom'

export const ShopCategory = styled.div`
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: #f1f6f7;
    min-height: 60vh;
    height: auto;
    align-items: center;
`
export const ShopBanner = styled.h1`
    color: #000;
    font: 36px Oswald, sans-serif;
    margin: 0px 0px 10px;
    font-weight: 700;
    line-height: 1.1;
    text-align: center;
`
export const ShopDesc = styled.div`
    display: flex;
    color: #777;
`
export const ShopDescHome = styled(Link)`
    color: #777;
    text-decoration: none;
    &:after {
        content: ' ‎';
    }
`
export const ShopDescCategory = styled.p`
    &:before {
        content: '- Shop Category';
    }
`
export const ShopContent = styled.div`
    display: flex;
    flex-wrap: wrap;
    margin: 3% 2%;
`
export const SideBar = styled.div`
    flex: 0 0 20%;
    max-width: 20%;
`
export const SideBarCategories = styled.div`
    display: block;
`
export const CategoryHeading = styled.h1`
    font-family: 'Oswald',sans-serif;
    line-height: 50px;
    background: #384aeb;
    padding: 0 30px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
`
export const CategoryList = styled.ul`
    padding: 20px 28px;
    background: #f1f6f7;
    list-style-type: none;
`
export const CategoryListItem = styled.li`
    display: list-item;
    text-align: left;
`
export const CategoryForm = styled.form`
    display: block;
    margin-top: 0%;
`
export const FormList = styled.ul`
	list-style-type: none;
	margin: 0;
`
export const FormListItem = styled.li`
	display: block;
	position: relative;
	padding: 0;
`
const clickWave = keyframes`
    0% {
      height: 20px;
      width: 20px;
      opacity: 0.35;
      position: relative;
    }
    100% {
      height: 50px;
      width: 50px;
      margin-left: -15px;
      margin-top: -15px;
      opacity: 0;
    }
`
export const FilterSelection = styled.input`
	-webkit-appearance: none;
    -moz-appearance: none;
    -ms-appearance: none;
    -o-appearance: none;
    appearance: none;
    position: relative;
    top: 5px;
    right: 0;
    bottom: 0;
    left: 0;
    height: 20px;
    width: 20px;
    transition: all 0.15s ease-out 0s;
    background: #cbd1d8;
    border: none;
    color: #fff;
    cursor: pointer;
    display: inline-block;
    margin-right: 0.5rem;
    outline: none;
    position: relative;
    z-index: 1000;
    border-radius: 50%;
    margin-right: 20px;
    &:hover {
        background: #9faab7;
    }
    &:checked {
        background: #384aeb;
    }
    &:checked::before {
        height: 20px;
        width: 20px;
        position: absolute;
        content: '✔';
        display: inline-block;
        font-size: 17px;
        text-align: center;
        line-height: 20px;
    }
    &:checked::after {
        -webkit-animation: ${clickWave} 0.65s;
        -moz-animation: ${clickWave} 0.65s;
        animation: ${clickWave} 0.65s;
        background: #384aeb;
        content: '';
        display: block;
        position: relative;
        z-index: 100;
        border-radius: 50%;
    }
`
export const FilterLabel = styled.label`
    display: block;
    line-height: 40px;
	cursor: pointer; 
	font-weight: 400;
`
export const SidebarFilters = styled.div`
    margin-top: 30px;
    display: block;
`
export const SidebarFilterHeading = styled.h1`
    font-family: 'Oswald',sans-serif;
    line-height: 50px;
    background: #384aeb;
    padding: 0 30px;
    font-size: 18px;
    font-weight: 400;
    color: #fff;
`
export const ProductFilter = styled.div`
    background: #f1f6f7;
    border-bottom: 1px solid #eee;
    padding-bottom: 25px;
`
export const FilterHeading = styled.h3`
    padding: 20px 30px 0px 30px;
    font-size: 15px;
    color: #000;
`
export const PriceRangeContainer = styled.div`
    padding: 15px 30px 0 30px;
`
export const MainContent = styled.div`
    flex: 0 0 80%;
    max-width: 80%;
`
export const FilterBar = styled.div`
    padding: 0 20px 10px 20px;
    background: #f1f6f7;
    margin-bottom: 30px;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
`
export const Sorting = styled.div`
    margin-top: 10px;
    margin-right: 10px;
`
export const SortingSelector = styled.select`
    display: none;
`
export const SortingOptions = styled.option`
    font-weight: normal;
    display: block;
    white-space: nowrap;
    min-height: 1.2em;
    padding: 0px 2px 1px;
`
export const SortingDefault = styled.div`
    -webkit-tap-highlight-color: transparent;
    background-color: #fff;
    border-radius: 5px;
    border: solid 1px #e8e8e8;
    box-sizing: border-box;
    clear: both;
    cursor: pointer;
    display: block;
    float: left;
    font-family: inherit;
    font-size: 14px;
    font-weight: normal;
    height: 42px;
    line-height: 40px;
    outline: none;
    padding-left: 18px;
    padding-right: 30px;
    position: relative;
    text-align: left!important;
    -webkit-transition: all .2s ease-in-out;
    transition: all .2s ease-in-out;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    white-space: nowrap;
    width: auto;
`