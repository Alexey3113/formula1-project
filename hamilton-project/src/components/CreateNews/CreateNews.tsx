import axios from "axios"
import React, { ChangeEvent, useCallback, useState } from "react"
import { collapseTextChangeRangesAcrossMultipleVersions } from "typescript"
import Button from "../Button/Button"
import Input from "../Input/Input"
import Textarea from "../Textarea/Textarea"

import "./CreateNews.scss"

export const CreateNews = () => {
    const [title, setTitle] = useState<string>("")
    const [description, setDescription] = useState<string>("")
    const [miniTitle, setMiniTitle] = useState<string>("")
    const [adminKey, setAdminKey] = useState<string>("")
    const [img, setImg] = useState<any>("")
    const [drag, setDrag] = useState<boolean>(false)

    const dragStartHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setDrag(true)
    }

    const dragLeaveHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        setDrag(false)
    }

    const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            addImg(e.target.files[0])
        }
    }
    const dropPhotoHandler = (e: React.DragEvent<HTMLLabelElement>) => {
        e.preventDefault()
        if (e.dataTransfer.files[0]) {
            addImg(e.dataTransfer.files[0])
        }
    }

    const addImg = (file: File) => {
        let reader = new FileReader()
        reader.readAsDataURL(file)
        reader.onload = function () {
            setImg(reader.result)
        }
    }

    const clearAllData = () => {
        setImg("")
        setTitle("")
        setDescription("")
        setAdminKey("")
        setMiniTitle("")
    }

    const fetchArticle = async () => {
        if (title && img && description && adminKey && miniTitle) {
            const response = axios.post("http://localhost:5000/api/articles/", {
                title,
                description,
                miniTitle,
                img,
                key: adminKey,
            })
            clearAllData()
        }
    }

    const handleDeleteImg = () => {
        setImg("")
    }

    const handleChangeTitle = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value),
        [title]
    )

    const handleChangeMiniTitle = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setMiniTitle(e.target.value),
        [miniTitle]
    )

    const handleChangeDescription = useCallback(
        (e: ChangeEvent<HTMLTextAreaElement>) => setDescription(e.target.value),
        [description]
    )

    const handleChangeAdminKey = useCallback(
        (e: ChangeEvent<HTMLInputElement>) => setAdminKey(e.target.value),
        [adminKey]
    )

    return (
        <div className="createnews">
            <div className="createnews__container blockContainer">
                <div className="createnews__title">Создать статью</div>
                {!img ? (
                    <label
                        className="createnews__img_add"
                        onDragStart={dragStartHandler}
                        onDragLeave={dragLeaveHandler}
                        onDragOver={dragStartHandler}
                        onDrop={dropPhotoHandler}
                    >
                        <span>+</span>
                        <input type="file" onChange={handlePhoto} />
                    </label>
                ) : (
                    <div className="createnews__img">
                        <span onClick={handleDeleteImg}>x</span>
                        <img src={img} alt="photo" />
                    </div>
                )}

                <div className="createnews__field">
                    <label>Название статьи</label>
                    <Input
                        type="text"
                        value={title}
                        setValue={handleChangeTitle}
                        maxLength={60}
                    />
                </div>
                <div className="createnews__field">
                    <label>Небольшое описание</label>
                    <Input
                        type="text"
                        value={miniTitle}
                        setValue={handleChangeMiniTitle}
                        maxLength={60}
                    />
                </div>
                <div className="createnews__field">
                    <label>Полное описание</label>
                    <Textarea
                        value={description}
                        setValue={handleChangeDescription}
                    />
                </div>
                <div className="createnews__field">
                    <label>Admin Key</label>
                    <Input
                        type="text"
                        value={adminKey}
                        setValue={handleChangeAdminKey}
                        maxLength={60}
                    />
                </div>
                <Button clickCallback={fetchArticle} title="Отправить" />
            </div>
        </div>
    )
}
