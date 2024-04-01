import Link from 'next/link'

function CapsuleButton({
    text,
    link,
    topMargin,
    rightMargin,
    small,
    icon,
    iconCallback,
    iconActive,
    internalLink
}) {
    return (
        <div className={`custom-butn custom-bord ${topMargin && "mt-40"} ${rightMargin && "mr-4"} ${small && "small"} ${small && (!icon || iconActive) && "orange"}`} onClick={iconCallback && iconCallback} data-swiper-parallax="-8000">
            {
                icon ?
                    <i onClick={iconCallback} className={`fas ${icon}`}></i>
                    :
                    internalLink ?
                        <div onClick={internalLink}>
                            {text}
                            <i className={`fa fa-chevron-down ml-4`} aria-hidden="true"></i>
                        </div>
                        :
                        <Link href={link} scroll={false}>
                            {text}
                            <i className={`fa fa-chevron-right ml-4`} aria-hidden="true"></i>
                        </Link>
            }
        </div>
    )
}

export default CapsuleButton