import React, { useContext, useState } from "react";
import YourBotArmy from "./YourBotArmy";
import BotCollection from "./BotCollection";
import { DataContext } from "../context/data";

function BotsPage() {
  const { data, setData } = useContext(DataContext);
  const [botArmy, setBotArmy] = useState([]);

  const addBotToArmy = (armyBot) => {
    if (!botArmy.find((bot) => bot === armyBot)) {
      const foundBot = data.find((bot) => bot === armyBot);
      setBotArmy([...botArmy, foundBot]);
    }
  };

  const dischargeBot = (armyBot) => {
    const army = botArmy.filter((bot) => bot !== armyBot);
    setBotArmy(army);
  };
  const deleteBot = (armyBot) => {
    if (botArmy.find((bot) => bot === armyBot)) {
      const bots = data.filter((bot) => bot !== armyBot);
      const army = botArmy.filter((bot) => bot !== armyBot);

      setData(bots);
      setBotArmy(army);

      fetch(`http://localhost:8002/bots/${armyBot.id}`, {
        method: "DELETE",
      });
    } else {
      console.log("not even enlisted");
    }
  };

  return (
    <div>
      <YourBotArmy
        bots={botArmy}
        dischargeBot={dischargeBot}
        deleteBot={deleteBot}
      />
      <BotCollection
        data={data}
        addToArmy={addBotToArmy}
        deleteBot={deleteBot}
      />
    </div>
  );
}

export default BotsPage;