import React from "react"
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader
        className="pizza-block"
        speed={2}
        width={285}
        height={500}
        viewBox="0 0 285 500"
        backgroundColor="#f3f3f3"
        foregroundColor="#ecebeb"
    >
        <circle cx="134" cy="136" r="125" />
        <rect x="0" y="280" rx="10" ry="10" width="280" height="25" />
        <rect x="0" y="325" rx="10" ry="10" width="280" height="88" />
        <rect x="0" y="435" rx="10" ry="10" width="95" height="30" />
        <rect x="125" y="425" rx="20" ry="20" width="152" height="45" />
    </ContentLoader>
)

export default Skeleton;