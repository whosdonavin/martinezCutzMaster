import styled from "styled-components";
import { mobile } from "../../Responsive";
import Image from "../../Images/Pinstripe.svg";
import GalleryImages from "../../Images";

const GalleryPage = styled.section``;
const PageTitle = styled.div`
  width: fit-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
  margin-bottom: 1rem;
`;
const Title = styled.h1`
  font-size: 2rem;
`;
const Pinstripe = styled.img`
  width: 100%;
`;
const ImageGallery = styled.div`
  display: grid;
  grid-gap: 2rem;
  padding: 1rem;
  width: 60%;
  margin: 0 auto;
  grid-template-columns: repeat(3, 1fr);
  ${mobile({
    "grid-gap": "1rem",
    "grid-template-columns": "repeat(2, 1fr)",
    width: "100%",
  })}
`;
const Img = styled.img`
  width: 100%;
`;
const Gallery = () => {
  return (
    <GalleryPage>
      <PageTitle>
        <Title>Gallery</Title>
        <Pinstripe src={Image} />
      </PageTitle>
      <ImageGallery>
        <Img src={`${GalleryImages.galleryImg1}`}></Img>
        <Img src={`${GalleryImages.galleryImg2}`}></Img>
        <Img src={`${GalleryImages.galleryImg3}`}></Img>
        <Img src={`${GalleryImages.galleryImg4}`}></Img>
        <Img src={`${GalleryImages.galleryImg5}`}></Img>
        <Img src={`${GalleryImages.galleryImg6}`}></Img>
        <Img src={`${GalleryImages.galleryImg7}`}></Img>
        <Img src={`${GalleryImages.galleryImg8}`}></Img>
        <Img src={`${GalleryImages.galleryImg9}`}></Img>
        <Img src={`${GalleryImages.galleryImg10}`}></Img>
        <Img src={`${GalleryImages.galleryImg11}`}></Img>
        <Img src={`${GalleryImages.galleryImg12}`}></Img>
      </ImageGallery>
    </GalleryPage>
  );
};

export default Gallery;
