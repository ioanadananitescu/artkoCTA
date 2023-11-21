'use client'
import React, { useEffect, useState } from 'react'
import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import Image from 'next/image'

export default function AvatarDashboard({ uid, url, size }) {
  const supabase = createClientComponentClient()
  const [avatarUrl, setAvatarUrl] = useState(null)
 

  useEffect(() => {
    async function downloadImage(path) {
      try {
        const { data, error } = await supabase.storage.from('avatars').download(path)
        if (error) {
          throw error
        }

        const url = URL.createObjectURL(data)
        setAvatarUrl(url)
      } catch (error) {
        console.log('Error downloading image: ', error)
      }
    }

    if (url) downloadImage(url)
  }, [url, supabase])




  return (
    <>
  {avatarUrl ? (
        <Image
          width={size}
          height={size}
          src={avatarUrl}
          alt="User profile image"
          className="avatar image"
          style={{ height: size, width: size }}
        />
      ) : (
        <div className="avatar no-image" style={{ height: size, width: size }} />
      )}
       
       
        </>
  
  )
}