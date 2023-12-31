import { Builder } from '@builder.io/react'

export default function Cloud(props) {
    if (!props.cloudinaryOptions) {
      return 'Choose an Image'
    }
    return (
      <img
        src={props.cloudinaryOptions.url}
        width={props.cloudinaryOptions.width}
        height={props.cloudinaryOptions.height}
      />
    )
  }