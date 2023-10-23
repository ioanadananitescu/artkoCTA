'use client'
import { useCallback, useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Avatar from './avatar'


export default function AccountForm({ session}) {
  const supabase = createClientComponentClient()
  const [loading, setLoading] = useState(true)
  const [fullname, setFullname] = useState(null)
  const [username, setUsername] = useState(null)
  const [website, setWebsite] = useState(null)
  const [avatar_url, setAvatarUrl] = useState(null)
  const user = session?.user

  const getProfile = useCallback(async () => {
    try {
      setLoading(true)

      let { data, error, status } = await supabase
        .from('profiles')
        .select(`full_name, username, website, avatar_url`)
        .eq('id', user?.id)
        .single()

      if (error && status !== 406) {
        throw error
      }

      if (data) {
        setFullname(data.full_name)
        setUsername(data.username)
        setWebsite(data.website)
        setAvatarUrl(data.avatar_url)
      }
    } catch (error) {
      alert('Error loading user data!')
    } finally {
      setLoading(false)
    }
  }, [user, supabase])

  useEffect(() => {
    getProfile()
  }, [user, getProfile])

  async function updateProfile({ username, website, avatar_url }) {
    try {
      setLoading(true)

      let { error } = await supabase.from('profiles').upsert({
        id: user?.id,
        full_name: fullname,
        username,
        website,
        avatar_url,
        updated_at: new Date().toISOString(),
      })
      if (error) throw error
      alert('Profile updated!')
    } catch (error) {
      alert('Error updating the data!')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="grid grid-cols-1 px-4 pt-6 lg:grid-cols-3 lg:gap-4 dark:bg-gray-900">
    <div className="mb-4 col-span-full xl:mb-2">
        <nav className="flex mb-5" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 text-sm font-medium md:space-x-2">
              <li className="inline-flex items-center">
                <a href="/" className="inline-flex items-center text-gray-700 hover:text-primary-600 dark:text-gray-300 dark:hover:text-white">
                                    <svg className="w-5 h-5 mr-2.5" fill="currentColor" viewBox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"><path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path></svg>
                  Home
                </a>
              </li>
              <li>
                <div className="flex items-center">
                                    <svg className="w-6 h-6 text-gray-400" fill="currentColor"
                                        viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                        <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <a href="/users" className="ml-1 text-gray-700 hover:text-primary-600 md:ml-2 dark:text-gray-300 dark:hover:text-white">Users</a>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <svg className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                  <span className="ml-1 text-gray-400 md:ml-2 dark:text-gray-500" aria-current="page">Settings</span>
                </div>
              </li>
            </ol>
        </nav>
        <h1 className="text-xl font-semibold text-gray-900 sm:text-2xl dark:text-white">User settings</h1>
    </div>
    <div className="col-span-full xl:col-auto">
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
         
         {/* avatar */}
          <div className="items-center sm:flex xl:block 2xl:flex sm:space-x-4 xl:space-x-0 2xl:space-x-4">
                       <Avatar
      uid={user?.id}
      url={avatar_url}
      size={150}
      onUpload={(url) => {
        setAvatarUrl(url)
        updateProfile({ fullname, username, website, avatar_url: url })
      }}
            />
          </div>
        </div>
        {/* language and time */}
    <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
        <h3 className="mb-4 text-xl font-semibold dark:text-white">Language & Time</h3>
        <div className="mb-4">
            <label for="settings-language" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select language</label>
            <select id="settings-language" name="countries" className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>English (US)</option>
                <option>Italiano</option>
                <option>Français (France)</option>
                <option>正體字</option>
                <option>Español (España)</option>
                <option>Deutsch</option>
                <option>Português (Brasil)</option>
            </select>
        </div>
        <div className="mb-6">
            <label for="settings-timezone" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Time Zone</label>
            <select id="settings-timezone" name="countries" className="bg-gray-50 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500">
                <option>GMT+0 Greenwich Mean Time (GMT)</option>
                <option>GMT+1 Central European Time (CET)</option>
                <option>GMT+2 Eastern European Time (EET)</option>
                <option>GMT+3 Moscow Time (MSK)</option>
                <option>GMT+5 Pakistan Standard Time (PKT)</option>
                <option>GMT+8 China Standard Time (CST)</option>
                <option>GMT+10 Eastern Australia Standard Time (AEST)</option>
            </select>
        </div>
</div>
</div>
      <div className="col-span-2">
        {/* right part of the screen */}
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <h3 className="mb-4 text-xl font-semibold dark:text-white">General information</h3>
         
              <div className="grid grid-cols-6 gap-6">
                {/* fullname */}
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="fullName" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Full Name</label>
<input
className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
 focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
  dark:bg-gray-700 
  dark:border-gray-600 
 dark:placeholder-gray-400 
dark:text-white 
dark:focus:ring-primary-500 
dark:focus:border-primary-500"
id="fullName"
 type="text"
 value={fullname || ''}
onChange={(e) => setFullname(e.target.value)}
        />
                </div>
              </div>
              {/* username */}
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="username">Username</label>
                  <input
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                    focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
                     dark:bg-gray-700 
                     dark:border-gray-600 
                    dark:placeholder-gray-400 
                   dark:text-white 
                   dark:focus:ring-primary-500 
                   dark:focus:border-primary-500"
          id="username"
          type="text"
          value={username || ''}
          onChange={(e) => setUsername(e.target.value)}
                  />
              </div>
              {/* email */}
                <div className="col-span-6 sm:col-span-3">
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email</label>
                  <input id="email" type="text" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                    value={session?.user.email} disabled />
                                         </div>
          {/* role (not implemented yet in supabase) */}
                    <div className="col-span-6 sm:col-span-3">
                        <label for="role" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Role</label>
                  <input
                    type="text"
                    name="role" id="role"
                    className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
                        dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white
                        dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="React Developer" required/>
              </div>

              {/* website */}
              <div className="col-span-6 sm:col-span-3">
              <label htmlFor="website">Website</label>
                <input
                  className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg 
                  focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 
                   dark:bg-gray-700 
                   dark:border-gray-600 
                  dark:placeholder-gray-400 
                 dark:text-white 
                 dark:focus:ring-primary-500 
                 dark:focus:border-primary-500"
          id="website"
          type="url"
          value={website || ''}
          onChange={(e) => setWebsite(e.target.value)}
        />
              </div>
            {/* update all button */}
                <div className="col-span-6 sm:col-full">
                <button
          className="text-white bg-primary-700 
          hover:bg-primary-800 focus:ring-4
          focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center
          dark:bg-primary-600
          dark:hover:bg-primary-700
          dark:focus:ring-primary-800"
          onClick={() => updateProfile({ fullname, username, website, avatar_url })}
          disabled={loading}
        >
          {loading ? 'Loading ...' : 'Update'}
        </button>
      </div>
    {/* sign out button */}
      <div>
        <form action="/auth/signout" method="post">
          <button className="button block" type="submit">
            Sign out
                    </button>
                    </form>
              
             
        </div>
        </div>
        
        {/* sessions */}
        <div className="p-4 mb-4 bg-white border border-gray-200 rounded-lg shadow-sm 2xl:col-span-2 dark:border-gray-700 sm:p-6 dark:bg-gray-800">
            <div className="flow-root">
                <h3 className="text-xl font-semibold dark:text-white">Sessions</h3>
                <ul className="divide-y divide-gray-200 dark:divide-gray-700">
                    <li className="py-4">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                            <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                           Last Signed In:</p>
                           <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                           <code className="highlight">{new Date(user.last_sign_in_at).toUTCString()}</code>
                                </p>    
     
    
                                
                                <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                    California 123.123.123.123
                                </p>
                                <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                    Chrome on macOS
                                </p>
                            </div>
                            <div className="inline-flex items-center">
                                <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Revoke</a>
                            </div>
                        </div>
                    </li>
                    <li className="pt-4 pb-6">
                        <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                                <svg className="w-6 h-6 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path></svg>
                            </div>
                            <div className="flex-1 min-w-0">
                                <p className="text-base font-semibold text-gray-900 truncate dark:text-white">
                                    Rome 24.456.355.98
                                </p>
                                <p className="text-sm font-normal text-gray-500 truncate dark:text-gray-400">
                                    Safari on iPhone                                
                                </p>
                            </div>
                            <div className="inline-flex items-center">
                                <a href="#" className="px-3 py-2 mb-3 mr-3 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-primary-300 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">Revoke</a>
                            </div>
                        </div>
                    </li>
                </ul>
                <div>
                    <button className="text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">See more</button>
                </div>
            </div>
        </div>
    
      <div>
      
      </div>
      <div>
     
</div> 
      </div>
      </div>
              )


}