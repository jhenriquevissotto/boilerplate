import { router, ctrl } from '~/src'


router.express.get('/wellcome', ctrl.wellcome)


export const express = router.express