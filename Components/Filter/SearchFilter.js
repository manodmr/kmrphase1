import { darkLightModeContext } from "@/Layout/Layout";
import { Search as SearchIcon } from "@mui/icons-material";
import { InputAdornment, OutlinedInput } from "@mui/material";
import { useContext } from "react";

function SearchStream({ filter, Array, onchange }) {
  const themeMode = useContext(darkLightModeContext);
  return (
    <div>
        <OutlinedInput
          disablePortal
          sx={{ px: 2, color: "grey", m: 2 , border: themeMode === true ? "1px solid gray" : '1px solid grey' }}
          name="Search"
          margin="normal"
          variant="outlined"
          onChange={onchange}
          size="small"
          endAdornment={
            <InputAdornment>
              <SearchIcon fontSize="small" />
            </InputAdornment>
          }
          options={Array}
          placeholder={`Search ${filter}`}
          autoComplete
        />
    </div>
  );
}

export default SearchStream;
