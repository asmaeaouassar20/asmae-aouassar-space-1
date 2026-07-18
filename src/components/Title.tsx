interface TitleProps {
    title : string
}

const Title = (titleP : TitleProps ) => {
    return (
        <h1 className="uppercase font-bold text-center text-3xl">
            {titleP.title}
        </h1>
    )
}

export default Title;