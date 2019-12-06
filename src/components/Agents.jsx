import React from "react";
import agentsData from "../agentData";
import reduceByName from "../reduceByName";
import Agent from "./Agent";
import TableHead from "./TableHead";

function Agents() {
  agentsData.sort((a, b) => new Date(a.date) - new Date(b.date));

  let agentReduce = reduceByName(agentsData, "agent");

  let uniqueAgents = [];

  for (let a in agentReduce) {
    let agentA = agentReduce[a];
    if (agentA.length === 1) uniqueAgents.unshift(...agentA);
  }

  let countryReduce = reduceByName(uniqueAgents, "country");

  let isolated = { count: 0, country: undefined };

  for (let a in countryReduce) {
    let countryA = countryReduce[a];
    if (countryA.length > isolated["count"]) {
      isolated = { count: countryA.length, country: a };
    }
  }

  return (
    <>
      <h4>
        the most isolated country is {isolated.country} with{" "}
        {isolated.count > 1
          ? ` ${isolated.count} agents.`
          : ` ${isolated.count} agents.`}
      </h4>
      {agentsData.length && (
        <div className="table-container">
          <TableHead />
          {agentsData.length > 0 &&
            agentsData.map((agent, index) => (
              <Agent
                key={agent.date}
                agent={agent}
                index={index}
                length={agentsData.length}
              />
            ))}
        </div>
      )}
    </>
  );
}
export default Agents;
