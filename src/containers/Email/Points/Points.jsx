import React from "react";
import { Box, Button, Paragraph, Point } from "../../../components";
import hand from "./hand.png";
import market from "./market.png";
import products from "./products.png";

export const Points = () => (
  <>
    <Paragraph style={{ padding: "40px 30px 32px" }}>
      Имя, кажется, вы давно не&nbsp;заходили к&nbsp;нам в&nbsp;гости! Есть
      отличный повод вернуться. Приглашаем за&nbsp;выгодными покупками
      и&nbsp;дарим 700&nbsp;баллов на&nbsp;Выручай-карту. Успейте
      воспользоваться предложением до&nbsp;17&nbsp;декабря.
    </Paragraph>

    <Box
      align="center"
      td={{ style: { padding: "0 30px", textAlign: "center" } }}
    >
      <Point src={market} alt="Магазин Пятёрочка" width="129">
        Приходите в&nbsp;«Пятёрочку» до&nbsp;17&nbsp;декабря
      </Point>

      <Point src={products} alt="Магазин Пятёрочка" width="84">
        Получите 700&nbsp;баллов за&nbsp;любую покупку с&nbsp;Выручай-картой
      </Point>

      <Point src={hand} alt="Магазин Пятёрочка" width="83">
        Используйте баллы для&nbsp;оплаты следующих покупок
      </Point>
    </Box>

    <Box td={{ style: { padding: "50px 0", textAlign: "center" } }}>
      <Button href="https://5ka.ru/" style={{ width: 210 }}>
        Найти ближайший магазин
      </Button>
    </Box>
  </>
);
