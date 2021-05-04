import SimpleImageSlider from 'react-simple-image-slider';

const images = [
  { url: './files/images/img-1.jpg' },
  { url: './files/images/img-2.jpg' },
  { url: './files/images/img-3.jpg' },
  { url: './files/images/img-4.jpg' },
  { url: './files/images/img-5.jpg' },
  { url: './files/images/img-6.jpg' },
  { url: './files/images/img-7.jpg' },
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider width={1400} height={504} images={images} />
    </div>
  );
};

export default Slider;
