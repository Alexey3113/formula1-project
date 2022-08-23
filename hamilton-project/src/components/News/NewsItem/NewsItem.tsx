import React, { useEffect, useMemo, useRef, useState } from "react"
import { useParams } from "react-router"
import news1 from "../../../assets/images/imgs/ham1.jpg"
import { useFetch } from "../../../hooks/useFetch"

import "./newsitem.scss"

export const NewsItem = () => {
    const [description, setDescription] = useState<string[]>([])

    const params = useParams()

    const [data, isLoading] = useFetch({
        method: "GET",
        url: `http://localhost:5000/api/articles/${params.id}`,
    })

    const doRightString = () => {
        if (data) {
            setDescription(data.description.split("\n"))
        }
    }

    const months = useMemo(
        () => ({
            1: "января",
            2: "февраля",
            3: "марта",
            4: "апреля",
            5: "мая",
            6: "июня",
            7: "июля",
            8: "августа",
            9: "сентября",
            10: "октября",
            11: "ноября",
            12: "декабря",
        }),
        []
    )

    useEffect(() => {
        doRightString()
        console.log(
            "date now",
            new Date(Date.now()).getDate(),
            new Date(Date.now()).getMonth()
        )
    }, [data])

    let myData: any = new Date(Date.parse(data?.createdAt))
    let dayMonth: 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 =
        myData.getDay() + 1

    const date = useMemo(() => {
        console.log("My data", myData)
        if (myData) {
            return `${myData.getDate()} ${
                months[dayMonth]
            }, ${myData.getFullYear()} года`
        }
    }, [myData])

    if (!data) return <div></div>

    return (
        <div className="newsitem">
            <div className="newsitem__container blockContainer">
                <div className="newsitem__title"> {data.title} </div>
                <div className="newsitem__date">{date}</div>
                <div className="newsitem__photo">
                    <img src={data.img} alt="news" />{" "}
                </div>
                <div className="newsitem__description">
                    {description &&
                        description.map((el: string, i: number) => {
                            return (
                                <div
                                    key={i}
                                    style={{
                                        marginBottom: "20px",
                                        textAlign: "justify",
                                    }}
                                >
                                    {el}
                                </div>
                            )
                        })}
                </div>
                <hr />
                <div className="addititional-info">
                    © Редакция F1News.Ru 1997-2022. Свидетельство о регистрации
                    СМИ Эл № ФС77-29173. Зарегистрировано Федеральной службой по
                    надзору в сфере связи, информационных технологий и массовых
                    коммуникаций.
                </div>
                <div className="addititional-info">
                    This website is not associated in any way with the Formula 1
                    companies. F1, FORMULA ONE, FORMULA 1, FIA FORMULA ONE WORLD
                    CHAMPIONSHIP, GRAND PRIX and related marks are trade marks
                    of Formula One Licensing B.V.
                </div>
            </div>
        </div>
    )
}
