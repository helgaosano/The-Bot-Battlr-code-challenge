import React from "react";
import BotCard from "./BotCard";

function YourBotArmy({ bots, dischargeBot, deleteBot }) {
  //your bot army code here...

  return (
    <div className="ui segment inverted olive bot-army">
      <div className="ui five column grid">
        <div className="row bot-army-row">
          {bots.map((bot) => (
            <BotCard
              key={bot.id}
              bot={bot}
              handleBot={dischargeBot}
              deleteBot={deleteBot}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default YourBotArmy;