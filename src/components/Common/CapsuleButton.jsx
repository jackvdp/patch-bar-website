import Link from 'next/link'

function CapsuleButton({ text, link }) {
    return (
        <div className="custom-butn custom-bord" data-swiper-parallax="-8000">
            <Link href={link}>
                {text}
                <i className="fa fa-chevron-right ml-4" aria-hidden="true"></i>
            </Link>
        </div>
    )
}

export default CapsuleButton