
// styled assets
import {
    SignatureContainer
} from "./styled"

// import thing from "./otherFile.js"

import ListArrow from "../../../../public/photos/arrow-04.png"
// const menuButton = document.getElementById('menu-button');
// const menuOverlay = document.getElementById('menu-overlay');

{/* <script>
            menuButton.addEventListener('click', () => {
            menuButton.classList.toggle('active');
            menuOverlay.classList.toggle('hidden');
            });
</script> */}

export function Contributors() {
    return (
        <div
            style={{
                padding: "64px 32px",
                width: "95vw",
                display: "flex",
                alignSelf: "center !important",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
                right: "150px"
            }}
        >

            {/* <div id="menu-button">
                <span></span>
                <span></span>
                <span></span>
            </div>
            <div id="menu-overlay" className="hidden">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div> */}


            <div className="grid-wrapper"> 
                <div className="blog-collection">
                    <div className="grid-container">
                        <div role="listitem" className="blog-item w-dyn-item first">
                        {/* href={`/issue/1/article/akwaeke`} */}
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Camille Bacon</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item second">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Daria Harper</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item third">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Dr. Rikki Byrd</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item fourth">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Rhya Marlene Moffitt</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item fifth">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Amandine Nana</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item sixth">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Imani Perry</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item seventh">
                            <a href="" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }}>
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Angelique Rosales Salgado</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                                {/* <img src="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp" loading="lazy" alt="" sizes="(max-width: 767px) 45vw, 24vw" srcset="https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-500.webp 500w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012-p-800.webp 800w, https://cdn.prod.website-files.com/65f4c8ffbf63aa3dc2f7bfdf/6658a833ccb2636fc63d3f64_Group%2012.webp 918w" className="blog-image"> */}
                            </a>
                        </div>
                    </div>
                </div>
                <div className="background-grid">
                    <div className="empty-block draw-border first">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border second">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="black-block first"></div>
                    <div className="empty-block draw-border third">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    {/* <div className="empty-block draw-border fourth">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border fifth">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border sixth">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border seventh">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border eighth">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div>
                    <div className="empty-block draw-border ninth">
                        <div className="border top-border"></div>
                        <div className="border right-border"></div>
                        <div className="border bottom-border"></div>
                        <div className="border left-border"></div>
                    </div> */}
                </div>
            </div>

            <div className=""></div>


        </div>
    )
}
