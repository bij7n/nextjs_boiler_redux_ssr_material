// @mui
import type { BoxProps, SxProps, Theme } from "@mui/material";
import { Box } from "@mui/material";
import type { LazyLoadImageProps } from "react-lazy-load-image-component";
import { LazyLoadImage } from "react-lazy-load-image-component";

// ----------------------------------------------------------------------

export type ImageRato =
  | "190/107"
  | "107/190"
  | "4/3"
  | "3/4"
  | "6/4"
  | "4/6"
  | "16/9"
  | "9/16"
  | "21/9"
  | "9/21"
  | "27/9"
  | "9/27"
  | "1/1";

type IProps = BoxProps & LazyLoadImageProps;

interface Props extends IProps {
  sx?: SxProps<Theme>;
  ratio?: ImageRato;
  disabledEffect?: boolean;
  noPlaceHolder?: boolean;
  stretch?: boolean;
}

export function getRatio(ratio: ImageRato = "1/1") {
  if (!ratio) return 0;
  return {
    "4/3": "calc(100% / 4 * 3)",
    "3/4": "calc(100% / 3 * 4)",
    "6/4": "calc(100% / 6 * 4)",
    "4/6": "calc(100% / 4 * 6)",
    "16/9": "calc(100% / 16 * 9)",
    "9/16": "calc(100% / 9 * 16)",
    "21/9": "calc(100% / 21 * 9)",
    "9/21": "calc(100% / 9 * 21)",
    "27/9": "calc(100% / 27 * 9)",
    "9/27": "calc(100% / 9 * 27)",
    "190/107": "calc(100% / 190 * 107)",
    "107/190": "calc(100% / 107 * 190)",
    "1/1": "100%",
  }[ratio];
}

export default function Image({
  ratio,
  disabledEffect = false,
  effect = "blur",
  sx,
  noPlaceHolder,
  stretch,
  ...other
}: Props) {
  if (stretch) {
    return (
      <Box
        component="span"
        sx={{
          width: 1,
          lineHeight: 0,
          display: "block",
          overflow: "hidden",
          position: "relative",
          "& .wrapper": {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            position: "absolute",
            backgroundSize: "cover !important",
          },
          ...sx,
        }}
      >
        <Box
          component={LazyLoadImage}
          wrapperClassName="wrapper"
          effect={disabledEffect ? undefined : effect}
          placeholderSrc={noPlaceHolder ? "" : "/images/img_placeholder.jpeg"}
          sx={{ width: 1, height: 1, objectFit: "cover" }}
          {...other}
        />
      </Box>
    );
  }

  if (ratio) {
    return (
      <Box
        component="span"
        sx={{
          width: 1,
          lineHeight: 0,
          display: "block",
          overflow: "hidden",
          position: "relative",
          pt: getRatio(ratio),
          "& .wrapper": {
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            lineHeight: 0,
            position: "absolute",
            backgroundSize: "contain !important",
          },
          ...sx,
        }}
      >
        <Box
          component={LazyLoadImage}
          wrapperClassName="wrapper"
          effect={disabledEffect ? undefined : effect}
          // placeholderSrc={noPlaceHolder ? "" : "/images/img_placeholder.jpeg"}
          sx={{ width: 1, height: 1, objectFit: "contain" }}
          {...other}
        />
      </Box>
    );
  }

  return (
    <Box
      component="span"
      sx={{
        lineHeight: 0,
        display: "block",
        overflow: "hidden",
        "& .wrapper": {
          width: 1,
          height: 1,
          backgroundSize: "contain !important",
        },
        ...sx,
      }}
    >
      <Box
        component={LazyLoadImage}
        wrapperClassName="wrapper"
        effect={disabledEffect ? undefined : effect}
        // placeholderSrc="/images/img_placeholder.jpeg"
        sx={{ width: 1, height: 1, objectFit: "contain" }}
        {...other}
      />
    </Box>
  );
}

// ----------------------------------------------------------------------
