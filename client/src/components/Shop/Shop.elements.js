import styled, { keyframes } from "styled-components";
import { styled as sty, alpha } from "@mui/material/styles";
import { Link } from "react-router-dom";
import InputBase from "@mui/material/InputBase";
import { ImCross } from "react-icons/im";

export const ShopCategory = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: #f1f6f7;
  min-height: 60vh;
  height: auto;
  align-items: center;
`;
export const ShopBanner = styled.h1`
  color: #000;
  font: 36px Oswald, sans-serif;
  margin: 0px 0px 10px;
  font-weight: 700;
  line-height: 1.1;
  text-align: center;
`;
export const ShopDesc = styled.div`
  display: flex;
  color: #777;
`;
export const ShopDescHome = styled(Link)`
  color: #777;
  text-decoration: none;
  &:after {
    content: " ‎";
  }
`;
export const ShopDescCategory = styled.p`
  &:before {
    content: "- Shop Category";
  }
`;
export const ShopContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 3% 2%;
`;
export const SideBar = styled.div`
  flex: 0 0 20%;
  max-width: 20%;
`;
export const SideBarCategories = styled.div`
  display: block;
`;
export const CategoryHeading = styled.h1`
  font-family: "Oswald", sans-serif;
  line-height: 50px;
  background: #384aeb;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;
export const CategoryList = styled.ul`
  padding: 20px 28px;
  background: #f1f6f7;
  list-style-type: none;
`;
export const CategoryListItem = styled.li`
  display: list-item;
  text-align: left;
`;
export const CategoryForm = styled.form`
  display: block;
  margin-top: 0%;
`;
export const FormList = styled.ul`
  list-style-type: none;
  margin: 0;
`;
export const FormListItem = styled.li`
  display: block;
  position: relative;
  padding: 0;
`;
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
`;
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
    content: "✔";
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
    content: "";
    display: block;
    position: relative;
    z-index: 100;
    border-radius: 50%;
  }
`;
export const FilterLabel = styled.label`
  display: block;
  line-height: 40px;
  cursor: pointer;
  font-weight: 400;
`;
export const SidebarFilters = styled.div`
  margin-top: 30px;
  display: block;
`;
export const SidebarFilterHeading = styled.h1`
  font-family: "Oswald", sans-serif;
  line-height: 50px;
  background: #384aeb;
  padding: 0 30px;
  font-size: 18px;
  font-weight: 400;
  color: #fff;
`;
export const ProductFilter = styled.div`
  background: #f1f6f7;
  border-bottom: 1px solid #eee;
  padding-bottom: 25px;
`;
export const FilterHeading = styled.h3`
  padding: 20px 30px 0px 30px;
  font-size: 15px;
  color: #000;
`;
export const PriceRangeContainer = styled.div`
  padding: 15px 30px 0 30px;
`;
export const MainContent = styled.div`
  flex: 0 0 80%;
  max-width: 80%;
`;
export const FilterBar = styled.div`
  padding: 10px 20px 10px 20px;
  margin-left: 20px;
  background: #f1f6f7;
  margin-bottom: 30px;
  align-items: center;
  display: flex;
  flex-wrap: wrap;
`;
export const Sorting = styled.div`
  margin-top: 10px;
  margin-right: 10px;
  min-width: 200px;
`;
export const Search = sty("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(1),
    width: "auto",
  },
}));

export const SearchIconWrapper = sty("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

export const StyledInputBase = sty(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    "border-radius": "15px",
    background: "#fff",
    [theme.breakpoints.up("sm")]: {
      width: "200px",
      paddingTop: "16.5px",
      paddingBottom: "16.5px",
      "&:focus": {
        width: "59rem",
      },
    },
  },
}));

export const ProductsContainer = styled.div`
  margin: 3%;
`
export const PageNav = styled.div`
  display: flex;
  justify-content: center;
`
export const SearchAndFilters = styled.div`
  padding-top: 10px;
  background: #f1f6f7;
  display: flex;
  flex-direction: column;
`
export const MobileFilterBar = styled(FilterBar)`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-left: 0px;
  margin-top: 10px;
  margin-bottom: 10px;
`
export const MobileProducts = styled(ProductsContainer)`
  margin-bottom: -50px;
`
export const MobileFilterButton = styled.button`
  background: #fff;
  border: 1px solid #d6d6e7;
  padding: 2%;
  box-shadow: 0 1px 0 0 rgb(35 38 59 / 5%);
  outline: medium none currentcolor;
`
export const MobileFilterOverlay = styled.div`
  position: fixed;
  display: none; 
  width: 100%;
  height: 70%;
  top: 30%;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
  z-index: 2;
  cursor: pointer;
  border-top: 1px solid red;
  overflow-y: scroll;
`
export const CloseOverlay = styled(ImCross)`
  position: fixed;
  color: #000;
  top: 31%;
  left: 92.5%;
  margin: 1%;
`