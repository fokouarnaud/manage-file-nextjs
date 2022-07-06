import Head from 'next/head';
import FilterSelect from '../components/filterSelect';
import MyListBox from '../components/MyListBox';
import { useState } from 'react';

const Home = () => {
  const [myfilter, setMyFilter] = useState({
    departement: "",
    type_doc: "",
    annee: ""
  });

  const items_departement = [
    {
      id: 1,
      name: 'Tous',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }, {
      id: 2,
      name: 'Didactique des disciplines',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'Enseignements fondamentaux en éducation',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: 'Education specialisee',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
  ];
  const items_type_doc = [
    {
      id: 1,
      name: 'Tous',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }, {
      id: 2,
      name: 'Memoire',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: 'These',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    }
  ];
  const items_annee = [
    {
      id: 1,
      name: 'Tous',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 2,
      name: '2020',
      avatar:
        'https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 3,
      name: '2021',
      avatar:
        'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    {
      id: 4,
      name: '2022',
      avatar:
        'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80',
    },
  ];




  return (
    <div >
      <Head>
        <title>Documents</title>
      </Head>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between pt-24 pb-6 border-b border-gray-200">
          <h1 className=" md:w-1/4 text-4xl font-extrabold tracking-tight text-gray-900">Documents</h1>
          <div className=' p-6 pb-6 border-4 border-dashed border-gray-200 rounded-lg md:w-3/4 flex flex-col md:flex-row md:flex-wrap gap-y-3 '>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
              <label className="block">
                <span className="text-gray-700">Departement</span>
                <select className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_departement.map(item => (
                  <option key={item.id} value={`${item.name}`}>{item.name}</option>
                ))}
                </select>
              </label>
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
              <label className="block">
                <span className="text-gray-700">Type document</span>
                <select className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_type_doc.map(item => (
                  <option key={item.id} value={`${item.name}`}>{item.name}</option>
                ))}
                </select>
              </label>
            </div>
            <div className='flex flex-col mt-6 md:mt-0 mr-6'>
              <label className="block">
                <span className="text-gray-700">Annee</span>
                <select className=" cursor-pointer block w-full mt-1 rounded-md bg-gray-100 border-transparent focus:border-gray-500 focus:bg-white focus:ring-0
                  ">{items_annee.map(item => (
                  <option key={item.id} value={`${item.name}`}>{item.name}</option>
                ))}
                </select>
              </label>
            </div>
            
            <button type="button" className=" mt-6 inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out">Filtrer</button>
          </div>




        </div>

        <section aria-labelledby="products-heading" className="pt-6 pb-24">

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-x-8 gap-y-10">

            {/* Product grid */}
            <div className="lg:col-span-12">
              {/* Replace with your content */}
              <div className=" pb-6 border-4 border-dashed border-gray-200 rounded-lg h-full">
                <MyListBox />
              </div>
              {/* /End replace */}
            </div>
          </div>
        </section>
      </main>


    </div>
  )
}


export default Home;
