// import { useState } from "react";
// import OutlinedInput from "@mui/material/OutlinedInput";
// import { useTheme } from "@mui/material/styles";
// import { setData } from "../redux/dataSlice";
// import { useDispatch } from "react-redux";

// function SearchBar() {
//   const theme = useTheme();
//   const dispatch = useDispatch();
//   const [inputValue, setInputValue] = useState("");
//   dispatch(setData({ key: "searchValue", data: inputValue }));

//   const handleInputChange = (event) => {
//     setInputValue(event.target.value);
//   };

//   return (
//     <OutlinedInput
//       sx={{
//         borderRadius: "20px",
//         padding: "10px 20px",
//         width: "60%",
//         height: "50px",
//         "&:hover:not($disabled):not($error) $notchedOutline": {
//           borderColor: theme.palette.primary.main,
//           borderWidth: "2px",
//         },
//         "&:focus:not($disabled):not($error) $notchedOutline": {
//           borderColor: theme.palette.primary.main,
//           borderWidth: "2px",
//         },
//         "&.Mui-focused $notchedOutline": {
//           borderColor: theme.palette.primary.main,
//           borderWidth: "2px",
//         },
//       }}
//       value={inputValue}
//       type="string"
//       placeholder="enter instagram url..."
//       onChange={handleInputChange}
//       inputProps={{ "aria-label": "instagram url" }}
//     />
//   );
// }

// export default SearchBar;

import { useState } from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import { useTheme } from "@mui/material/styles";
import { setData } from "../redux/dataSlice";
import { useDispatch } from "react-redux";
import SearchIcon from "@mui/icons-material/Search";
import InputAdornment from "@mui/material/InputAdornment";

function SearchBar() {
  const theme = useTheme();
  const dispatch = useDispatch();
  const [inputValue, setInputValue] = useState("");
  dispatch(setData({ key: "searchValue", data: inputValue }));

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <OutlinedInput
      sx={{
        borderRadius: "20px",
        padding: "10px 20px",
        width: "60%",
        height: "50px",
        "&:hover:not($disabled):not($error) $notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },
        "&:focus:not($disabled):not($error) $notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },
        "&.Mui-focused $notchedOutline": {
          borderColor: theme.palette.primary.main,
          borderWidth: "2px",
        },
      }}
      value={inputValue}
      type="string"
      placeholder="Search..."
      onChange={handleInputChange}
      inputProps={{ "aria-label": "instagram url" }}
      startAdornment={
        <InputAdornment position="start">
          <SearchIcon />
        </InputAdornment>
      }
    />
  );
}

export default SearchBar;
