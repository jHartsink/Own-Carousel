import gsap from 'gsap';
import CustomEase from 'gsap/CustomEase';

gsap.registerPlugin(CustomEase);

 const customEase = CustomEase.create(
  'custom',
  'M0,0,C0.045,0.089,0.021,0.58,0.162,0.78,0.368,0.439,0.635,0.345,0.752,0.476,0.878,0.617,0.851,1,1,1',
);
const test = CustomEase.create(
    CustomEase.create("custom", 
    "M0,0,C0,0,-0.07,0.531,0.138,0.74,0.138,0.74,0.258,0.778,0.258,0.778,0.264,0.784,0.319,0.803,0.33,0.798,0.367,0.798,0.377,0.829,0.41,0.83,0.412,0.83,0.422,0.833,0.428,0.822,0.432,0.816,0.434,0.835,0.436,0.836,0.44,0.836,0.455,0.838,0.46,0.84,0.654,1.064,1,1.2,1,1.2")
);


const vinnieInOut = CustomEase.create('VinnieInOut', 'M0,0 C0.2,0 0,1 1,1');

export const eases = {
  vinnieInOut,
  customEase,
  test,
};

