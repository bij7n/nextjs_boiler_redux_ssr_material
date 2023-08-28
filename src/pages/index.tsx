import { Button, Typography } from "@mui/material";
import type { GetServerSideProps } from "next";
import { useDispatch, useSelector, wrapper } from "store";
import { counterSelector, increaseCounter } from "store/slices/test";

import Page from "@/layouts";

export default function Home() {
  const { counter } = useSelector(counterSelector);
  const dispatch = useDispatch();
  return (
    <Page title="خانه">
      <Typography>سلام</Typography>
      <Typography>{counter}</Typography>
      <Button onClick={() => dispatch(increaseCounter())}>Increase</Button>
    </Page>
  );
}

export const getServerSideProps: GetServerSideProps = wrapper.getServerSideProps((store) => async (context) => {
  console.log(store);
  console.log(context);

  return {
    props: {},
  };
});
