import { Link } from "@mui/material";
import { Download as BrouchureIcon } from "@mui/icons-material";
import { Button as OutlineKMRButton } from "@/OverViews/Button";
import { useContext } from "react";
import { darkLightModeContext } from "@/Layout/Layout";

const BrouchureButton = ({ children, click  }) => {
  const themeMode = useContext(darkLightModeContext);
  return (
    <>
    <Link href="../" download={'sample.pdf'} style={{textDecoration:"none"}}>
      <OutlineKMRButton
        variant="outlined"
        onClick={click}
        sx={{
          border: themeMode === true ?"1.6px solid grey" : "1.6px solid primary",
          color: themeMode === true ? "grey.400" :"primary.dark",
          fontSize:'13.5px',
          width: "120px",
          px: "10px",
          justifyContent: "space-between",
          "&:hover": {
            border:themeMode === true ?"1.8px solid grey" : "1.7px solid primary",
          },
        }}
      >
        <BrouchureIcon fontSize="small" />
        Brouchure
      </OutlineKMRButton>
      </Link>
    </>
  );
};

export default BrouchureButton;
