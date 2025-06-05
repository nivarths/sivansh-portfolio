import React from 'react'
import { ExternalLink } from 'lucide-react'

const ProjectCard = ({ title, description, image, tags, link }) => {
  return (
    <div className='bg-[#111] p-6 rounded-xl border border-white/10 shadow hover:shadow-lg transition-all w-full max-w-sm md:max-w-[360px] mx-auto h-[500px] flex flex-col justify-between'>
        <img src={image} alt={title} className='rounded-lg mb-4 w-full h-56 object-contain bg-transparent' />
        <div>
            <h3 className='text-xl font-bold mb-2'>{title}</h3>
            <p className='text-gray-400 mb-3 text-sm'>{description}</p>
            <div className='flex flex-wrap gap-2 mb-4'>
                {tags.map((tag, i) => (
                    <span key={i} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-xs'>{tag}</span>
                ))}
            </div>
        </div>
        <a 
            href={link}
            target='_blank'
            rel='noopener noreferrer'
            className='text-blue-400 hover:text-blue-300 inline-flex items-center gap-1 text-sm'
            >
                View Project <ExternalLink className='w-4 h-4'/>
        </a>
    </div>
  )
}

export default ProjectCard