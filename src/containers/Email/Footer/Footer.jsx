import React from "react";
import { Image, Link, Table, TD } from "../../../components";
import { fontFamilies } from "../../../styles";
import fb from "./fb.png";
import ok from "./ok.png";
import vk from "./vk.png";

export const Footer = () => (
  <div
    style={{
      padding: "0 30px",
      fontFamily: fontFamilies.Tahoma,
      fontSize: 13,
      color: "#878787",
      backgroundColor: "#ededed",
    }}
  >
    <div style={{ padding: "25px 0" }}>
      <Table style={{ fontSize: 14 }}>
        <tr>
          <TD style={{ textAlign: "left", width: "33.3%" }}>
            <Link
              href="https://5ka.ru/"
              style={{ borderBottom: "1px solid #000000" }}
            >
              Вход в&nbsp;личный кабинет
            </Link>
          </TD>

          <TD style={{ textAlign: "center", padding: "0 5px", width: "33.3%" }}>
            <Link
              style={{ borderBottom: "1px solid #000000" }}
              href="https://5ka.ru/"
            >
              Правила программы
            </Link>
          </TD>

          <TD style={{ textAlign: "right", width: "33.3%" }}>
            <Link
              style={{ borderBottom: "1px solid #000000" }}
              href="https://5ka.ru/"
            >
              Часто задаваемые вопросы
            </Link>
          </TD>
        </tr>
      </Table>
    </div>

    <div style={{ padding: "12px 0" }}>
      <Table>
        <tr>
          <TD>
            <div style={{ fontSize: 10 }}>
              Круглосуточно, бесплатно по&nbsp;РФ
            </div>
            <div style={{ color: "#84c069", fontSize: 16, fontWeight: "bold" }}>
              8&nbsp;800&nbsp;555&nbsp;55&nbsp;05
            </div>
          </TD>

          <TD>
            <Table
              align="right"
              style={{ width: "100%", maxWidth: "144px", lineHeight: 0 }}
            >
              <tr>
                <TD style={{ textAlign: "left" }}>
                  <a href="https://5ka.ru/" style={{ display: "inline-block" }}>
                    <Image src={vk} alt="ВК" width="28"></Image>
                  </a>
                </TD>

                <TD style={{ textAlign: "center" }}>
                  <a href="https://5ka.ru/" style={{ display: "inline-block" }}>
                    <Image src={fb} alt="ФБ" width="28"></Image>
                  </a>
                </TD>

                <TD style={{ textAlign: "right" }}>
                  <a href="https://5ka.ru/" style={{ display: "inline-block" }}>
                    <Image src={ok} alt="ОК" width="28"></Image>
                  </a>
                </TD>
              </tr>
            </Table>
          </TD>
        </tr>
      </Table>
    </div>

    <div style={{ padding: "15px 0 49px" }}>
      <FooterParagraph>
        Не&nbsp;отвечайте на&nbsp;это&nbsp;письмо, оно отправлено автоматически.
        Если у&nbsp;вас есть вопрос, вы можете задать его в&nbsp;службу
        поддержки. Вам обязательно ответят. Если мы некорректно указали ваше
        имя, пожалуйста, сообщите нам об&nbsp;этом здесь
        или&nbsp;по&nbsp;телефону 8&nbsp;800&nbsp;555&nbsp;55&nbsp;05 и&nbsp;мы
        оперативно это&nbsp;исправим.
      </FooterParagraph>

      <FooterParagraph>
        <sup>1</sup>Баллы не&nbsp;могут быть списаны и&nbsp;начислены при
        покупке табака и&nbsp;табачной продукции. При&nbsp;покупке алкогольной
        продукции, в&nbsp;отношении которой законом РФ установлена минимальная
        розничная цена, баллы могут быть начислены только на&nbsp;стоимость выше
        минимальной розничной цены, а&nbsp;списаны для&nbsp;получения скидки
        только при&nbsp;соблюдении минимальной розничной цены. Баллы
        не&nbsp;начисляются при&nbsp;совершении покупки лотерейных билетов.
        Списание баллов для&nbsp;получения скидки при&nbsp;совершении покупки
        лотерейных билетов запрещено. Подробная информация на&nbsp;сайте{" "}
        <Link
          style={{ color: "#878787", borderBottom: "1px solid #878787" }}
          href="https://5ka.ru/"
        >
          5ka.ru/card/
        </Link>
        .
      </FooterParagraph>

      <FooterParagraph>Политика обработки персональных данных.</FooterParagraph>

      <FooterParagraph>
        Вы получили это&nbsp;письмо, потому&nbsp;что указали этот&nbsp;адрес
        при&nbsp;оформлении карты лояльности. Если вы не&nbsp;хотите получать
        данную рассылку, перейдите по&nbsp;ссылке.
      </FooterParagraph>

      <FooterParagraph>
        ООО&nbsp;«Агроторг», ОГРН&nbsp;1027809237796.
        <br /> Юридический адрес: Россия, 191025, г.&nbsp;Санкт-Петербург,
        пр.&nbsp;Невский, 90/92 ©&nbsp;«Пятёрочка»,&nbsp;2020
      </FooterParagraph>
    </div>
  </div>
);

const FooterParagraph = (props) => (
  <div style={{ padding: "7px 0" }}>{props.children}</div>
);
