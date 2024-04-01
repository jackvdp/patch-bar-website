import Link from 'next/link'

function CapsuleButton({ text, link, topMargin, rightMargin, small, icon, iconCallback }) {
    return (
        <div className={`custom-butn custom-bord ${topMargin && "mt-40"} ${rightMargin && "mr-4"} ${small && "small"} ${small && !icon && "orange"}`}  data-swiper-parallax="-8000">
            {
                icon ?
                    <i onClick={iconCallback} className={`fas ${icon}`}></i>
                    :
                    <Link href={link}>
                        {text}
                        <i className="fa fa-chevron-right ml-4" aria-hidden="true"></i>
                    </Link>
            }
        </div>
    )
}

export default CapsuleButton