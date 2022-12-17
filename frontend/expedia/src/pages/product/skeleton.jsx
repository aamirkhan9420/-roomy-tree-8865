import { Stack ,Skeleton} from "@chakra-ui/react"



function LoadingSkeleton(){
    return(
        <Stack>
  <Skeleton height='300px' />
  <Skeleton height='300px' />
  <Skeleton height='300px' />
  <Skeleton height='300px' />
</Stack>
    )
}
export default LoadingSkeleton