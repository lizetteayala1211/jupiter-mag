// styled assets
import {
    SignatureContainer
} from "./styled"

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
                padding: "64px 24px",
                width: "82vw",
                display: "flex",
                alignSelf: "center !important",
                justifyContent: "center",
                flexDirection: "column",
                position: "relative",
                right: "72px"
            }}

            className="pre-grid-wrap"
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
                    
                </div>
                <div className="blog-collection">
                    <div className="grid-container">
                        <div role="listitem" className="blog-item w-dyn-item first">
                            <a href="https://www.jupiter-mag.com/issue/5/article/hanif" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Hanif Abdurraqib</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item second">
                            <a href="https://www.jupiter-mag.com/issue/5/article/doreen" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Doreen St. F&#233;lix</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item third disabled">
                            <a href="https://www.jupiter-mag.com/issue/5/article/harmony" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right hidden">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small hidden">Harmony Holiday</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item fourth">
                            <a href="https://www.jupiter-mag.com/issue/5/article/kj" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">KJ Abudu</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item fifth">
                            <a href="https://www.jupiter-mag.com/issue/5/article/olukemi" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Olukemi Lijadu</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item sixth">
                            <a href="https://www.jupiter-mag.com/issue/5/article/tiana" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Tiana Reid</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <div role="listitem" className="blog-item w-dyn-item seventh">
                            <a href="https://www.jupiter-mag.com/issue/5/article/yume" className="blog-link transition-link w-inline-block">
                                <div className="blog-outer">
                                    <div className="blog-content draw-border">
                                        <div className="square-block_top has--align-right">
                                            <div style={{ display: "flex", width: "6%", height: "20px", alignSelf: "flex-end" }} className="arrow-wrapper">
                                                <SignatureContainer src={ListArrow} alt="Contributor List Arrow" className="arrow-icon is--large" />
                                            </div>
                                        </div>
                                        <p className="paragraph-small">Yume Murphy</p>
                                        <div className="border top-border"></div>
                                        <div className="border right-border"></div>
                                        <div className="border bottom-border"></div>
                                        <div className="border left-border"></div>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
