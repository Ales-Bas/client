import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonN = () => (
    <ContentLoader
        className="naves-card"
        speed={5}
        width={240}
        height={300}
        viewBox="0 0 240 300"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <rect x="0" y="30" rx="5" ry="5" width="240" height="16" />
        <rect x="0" y="70" rx="5" ry="5" width="240" height="230" />
    </ContentLoader>
)

export default SkeletonN