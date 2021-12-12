import React, { useEffect, useState } from "react";

import Background from '../components/Background';
import Header from '../components/Header';
import Footer from "../components/Footer";

import SearchArea from "../components/SearchArea";
import AdvancedSearch from "../components/AdvancedSearch";
import ScrollTop from "../components/ScrollTop";

import SearchResult from "../components/SearchResult";
import ImagesArea from "../components/ImagesArea";

import Load from "../components/Load";
import Images from "../components/Image";
import Modal from "../components/Modal";

export default function HomePage() {
    
    const [loading, setLoading] = useState(false);  //Shows loading icon on screen.
    const [totalResults, setTotalResults] = useState(30);  //Stores the total amount of images found.
    const [images, setImages] = useState([]);  //Stores all images delivered by the API.
    const [clearImages, setClearImages] = useState(false);  //Dispatches the command to clear the variable "image", so it can start a new search.
    const [searchImages, setSearchImages] = useState(false);  //Once clearImages returns true, this will give the order to start the new search.

    const [searchTextInput, setSearchTextInput] = useState("");  //API searching parameters related.
    const [page, setPage] = useState(1);
    const [perPage, setPerPage] = useState(30);
    const [imageSize, setImageSize] = useState("large");
    const [locale, setLocale] = useState("en-US"); 

    const [advSearchState, setAdvSearchState] = useState(false);  //Wether the settings box is active or not.

    const [hasImages, setHasImages] = useState(false);  //Verify if there are images on screen.
    const [isLoading, setIsLoading] = useState(true); //Verify if the page if loading more images. Needed to stop making unnecessary calls.

    const [modalState, setModalState] = useState("");  //Shows the modal on screen.
    const [modalData, setModalData] = useState("");  //It stores information from the selected image and displays it inside the modal.
    const [showModal, setShowModal] = useState(false);  //Needed to animate the opacity when modal is displayed.

    const apiKey = process.env.REACT_APP_API_KEY;

    const fetchImages = async () => {
        if((page * perPage) <= totalResults) {
            setLoading(true);
        setIsLoading(true);
        const result = await fetch(`https://api.pexels.com/v1/search?query=${encodeURI(searchTextInput)}&page=${page}&per_page=${perPage}&size=${imageSize}&locale=${locale}`, {
            headers: {
                'Authorization':  apiKey
            }
        });
        const json = await result.json();

        setLoading(false);
        setIsLoading(false);
        setTotalResults(json.total_results);

        if(images.length > 1) {
            setImages((images) => [...images, ...json.photos]);
        } else {
            setImages(json.photos);
        };
        setHasImages(true);
        }
        
        else {
            setTotalResults(60);
            setPage(1);
        }
    };

    //Check if .sentinel is on screen to start fetching for more images.
    useEffect(() => {
        if(isLoading === false) {
            const intersectionObserver = new IntersectionObserver(entries => {
                if (entries.some(entry => entry.isIntersecting)) {
                    setPage(page + 1);
                }
            })
            intersectionObserver.observe(document.querySelector('.sentinel'));
            return() => intersectionObserver.disconnect();
        }
    }, [isLoading]);

    useEffect(() => {
        if(page > 1) {
            fetchImages();
        }
    }, [page]);

    //Inputs and form handling.
    const handleAdvSearch = (event) => {
        event.preventDefault();
        if(advSearchState === false) return setAdvSearchState(true);
        else return setAdvSearchState(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if(searchTextInput !== '') {
            setImages([]);
            setPage(1);
            setHasImages(false);
            setAdvSearchState(false);
            setSearchImages(true);
        }
    };

    //It checks if there are no more images on screen before starting another search.
    useEffect(() => {
        if(clearImages === true) {
            setSearchImages(true);
            setClearImages(false);
        }
    }, [clearImages]);

    useEffect(() => {
        if(searchImages === true) {
            fetchImages();
            setSearchImages(false);
        }
    }, [searchImages]);

    //Modal handling.
    const handleModal = (image) => {
        setModalData(image);
        document.body.classList.add("no-scroll");
        setShowModal(true);
    }

    const closeModal = () => {
        setModalState("disabled");
        document.body.classList.remove("no-scroll");
        setTimeout(() => {
            setShowModal(false);
        }, 300);  
        
    };

    useEffect(() => {
        if(showModal === true) {
            setModalState("active");
        }
    }, [showModal])


    return (
        <>
            <Background>
            <Header page="about" />
            <SearchArea 
            getInput={(e) => { setSearchTextInput(e.target.value) }}
            submit={handleSubmit}
            advSearch={handleAdvSearch}
            >
                {advSearchState &&
                    <AdvancedSearch 
                    perPages={(e) => { setPerPage(e.target.value) }}
                    imageSize={(e) => { setImageSize(e.target.value) }}
                    locale={(e) => { setLocale(e.target.value) }} />
                }
            </SearchArea>
            </Background>
            
                <SearchResult>
                {images.length > 0 &&
                    <ImagesArea results={totalResults}>
                        {images.map((image, index) => (
                            <Images 
                            key={index} 
                            image={image} 
                            onClick={handleModal} />
                        ))}
                    </ImagesArea>
                }
                <div className="sentinel"></div>
                {loading === true &&
                    <Load />
                }
                <div className="blank-space"></div>
                </SearchResult>

            {showModal &&
                <Modal 
                state={modalState}
                onClick={closeModal}
                imageInfo={modalData} />
            }
            {!hasImages && 
                <Footer />
            }
            
            {hasImages &&
                <ScrollTop />
            }
        </>
    );
};
