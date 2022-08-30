import React, { useEffect, useMemo } from "react"

import "./news.scss"

import news1 from "../../assets/images/imgs/news1.jpg"
import news2 from "../../assets/images/imgs/news2.jpg"
import news3 from "../../assets/images/imgs/news3.jpg"
import news4 from "../../assets/images/imgs/news4.jpg"
import news5 from "../../assets/images/imgs/news5.jpg"
import news6 from "../../assets/images/imgs/news6.jpg"
import news7 from "../../assets/images/imgs/news7.jpg"
import news8 from "../../assets/images/imgs/news8.jpg"
import news9 from "../../assets/images/imgs/news9.jpg"
import { IAxios, useFetch } from "../../hooks/useFetch"
import { INews, INewsItem } from "../../types/news"
import { Link } from "react-router-dom"

export const News = () => {
    const [data, isLoading] = useFetch({
        method: "GET",
        url: "http://localhost:5000/api/articles/",
    })

    if (isLoading) return <div></div>

    return (
        <div className="news">
            <div className="news__container blockContainer">
                <div className="news__title">Новости</div>
                <div className="news__row">
                    <div className={`news__block`}>
                        {data &&
                            data.map((item: INewsItem, i: number) => {
                                return (
                                    <Link
                                        to={`/news/${item.id}`}
                                        key={i}
                                        className={`news__block_item df50`}
                                    >
                                        <div className="news__block_item_img">
                                            <img
                                                src={item.img}
                                                alt={item.title}
                                            />
                                        </div>
                                        <div className="news__block_item_info">
                                            <div className="news__block_item_info_title">
                                                {item.title}
                                            </div>
                                            <div className="news__block_item_info_text">
                                                {item.miniTitle}
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                    </div>
                </div>
            </div>
        </div>
    )
}
