export default function ProductDetails({id, title, images, price, description}) {
    return (
        <div>
            <h1>{id}</h1>
            <p>{title}</p>
            <p>${price}</p>
            {/* <p>
                <img src={images[0]} alt="images" />
            </p> */}
            <p>{description}</p>
        </div>
    )
}