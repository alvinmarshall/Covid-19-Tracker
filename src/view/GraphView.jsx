import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getGlobalTotalAction } from "../components/Graphs/reducer/graph.action";
import GraphLayout from "../components/Graphs/GraphLayout";

const GraphView = () => {
  const dispatch = useDispatch();
  const global = useSelector((state) => state.graph.global);

  useEffect(() => {
    const loadDaily = () => dispatch(getGlobalTotalAction());
    loadDaily();
  }, [dispatch]);

  return <GraphLayout items={global} />;
};

export default GraphView;
