import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getGlobalTotalAction } from "../components/Graphs/reducer/graph.action";

const useGlobalTotal = () => {
  const dispatch = useDispatch();
  const globalData = useSelector((state) => state.graph.global);

  useEffect(() => {
    const loadData = () => dispatch(getGlobalTotalAction());
    loadData();
  }, [dispatch]);

  return { globalData };
};

export default useGlobalTotal;
