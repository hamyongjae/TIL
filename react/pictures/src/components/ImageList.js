import React from 'react'

export default function imageList(props) {
    const images = props.images.map(images => {
        return <img src={imageList.urls.regular} />
    })
    return (
        key = {image.id},
        src = { image.urls.regular },
        alt = { image.description }

    )
}
