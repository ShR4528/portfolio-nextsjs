import Image from 'next/image';
import Link from 'next/link';
import cryptoImg from '../public/assets/projects/crypto.jpg';
import netflixImg from '../public/assets/projects/netflix.jpg';
import twitchImg from '../public/assets/projects/twitch.jpg';
import ProjectItem from './ProjectItem';
import propertyImg from '../public/assets/projects/property.jpg';

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I've Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Portfolio'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Gym'
            backgroundImg={cryptoImg}
            projectUrl='/gym'
            tech='React JS'
          />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='React JS'
          />
          <ProjectItem
            title='Store App'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
