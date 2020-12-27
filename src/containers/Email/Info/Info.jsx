import React from "react";
import { Button, Image, Paragraph } from "../../../components";
import bonus from "./bonus.png";

export const Info = () => (
  <>
    <div style={{ textAlign: "center", padding: "8px 30px 57px" }}>
      <Paragraph style={{ fontSize: 25, fontWeight: "bold" }}>
        Как использовать баллы
      </Paragraph>

      <Paragraph style={{ padding: "20px 0" }}>
        Вы можете списывать баллы при&nbsp;совершении покупок в&nbsp;«Пятерочке»
        для&nbsp;получения скидок до&nbsp;100% от&nbsp;суммы чека!<sup>1</sup>
      </Paragraph>

      <Image
        src={bonus}
        alt="Баллы"
        style={{ display: "inline-block", width: "100%", padding: "5px 0" }}
      />
    </div>

    <div style={{ padding: "34px 0", textAlign: "center" }}>
      <Button href="https://5ka.ru/" style={{ width: 210 }}>
        Узнать баланс карты
      </Button>
    </div>
  </>
);
