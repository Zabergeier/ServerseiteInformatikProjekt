import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../../../wayfinder'
/**
* @see \App\Http\Controllers\robotController::login
 * @see app/Http/Controllers/robotController.php:19
 * @route '/api/login'
 */
export const login = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

login.definition = {
    methods: ["post"],
    url: '/api/login',
} satisfies RouteDefinition<["post"]>

/**
* @see \App\Http\Controllers\robotController::login
 * @see app/Http/Controllers/robotController.php:19
 * @route '/api/login'
 */
login.url = (options?: RouteQueryOptions) => {
    return login.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::login
 * @see app/Http/Controllers/robotController.php:19
 * @route '/api/login'
 */
login.post = (options?: RouteQueryOptions): RouteDefinition<'post'> => ({
    url: login.url(options),
    method: 'post',
})

    /**
* @see \App\Http\Controllers\robotController::login
 * @see app/Http/Controllers/robotController.php:19
 * @route '/api/login'
 */
    const loginForm = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
        action: login.url(options),
        method: 'post',
    })

            /**
* @see \App\Http\Controllers\robotController::login
 * @see app/Http/Controllers/robotController.php:19
 * @route '/api/login'
 */
        loginForm.post = (options?: RouteQueryOptions): RouteFormDefinition<'post'> => ({
            action: login.url(options),
            method: 'post',
        })
    
    login.form = loginForm
/**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
export const index = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})

index.definition = {
    methods: ["get","head"],
    url: '/robots',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
index.url = (options?: RouteQueryOptions) => {
    return index.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
index.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: index.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
index.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: index.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
    const indexForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: index.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
        indexForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::index
 * @see app/Http/Controllers/robotController.php:42
 * @route '/robots'
 */
        indexForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: index.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    index.form = indexForm
/**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
export const create = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})

create.definition = {
    methods: ["get","head"],
    url: '/robots/create',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
create.url = (options?: RouteQueryOptions) => {
    return create.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
create.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: create.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
create.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: create.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
    const createForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: create.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
        createForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::create
 * @see app/Http/Controllers/robotController.php:48
 * @route '/robots/create'
 */
        createForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: create.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    create.form = createForm
/**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
export const registerRobot = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerRobot.url(options),
    method: 'get',
})

registerRobot.definition = {
    methods: ["get","head"],
    url: '/robots/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
registerRobot.url = (options?: RouteQueryOptions) => {
    return registerRobot.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
registerRobot.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: registerRobot.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
registerRobot.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: registerRobot.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
    const registerRobotForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: registerRobot.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
        registerRobotForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: registerRobot.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::registerRobot
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
        registerRobotForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: registerRobot.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    registerRobot.form = registerRobotForm
/**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
export const activateCockpit = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activateCockpit.url(args, options),
    method: 'get',
})

activateCockpit.definition = {
    methods: ["get","head"],
    url: '/robots/{robot}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
activateCockpit.url = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
    if (typeof args === 'string' || typeof args === 'number') {
        args = { robot: args }
    }

            if (typeof args === 'object' && !Array.isArray(args) && 'id' in args) {
            args = { robot: args.id }
        }
    
    if (Array.isArray(args)) {
        args = {
                    robot: args[0],
                }
    }

    args = applyUrlDefaults(args)

    const parsedArgs = {
                        robot: typeof args.robot === 'object'
                ? args.robot.id
                : args.robot,
                }

    return activateCockpit.definition.url
            .replace('{robot}', parsedArgs.robot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
activateCockpit.get = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: activateCockpit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
activateCockpit.head = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: activateCockpit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
    const activateCockpitForm = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: activateCockpit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
        activateCockpitForm.get = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activateCockpit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::activateCockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
        activateCockpitForm.head = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: activateCockpit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    activateCockpit.form = activateCockpitForm
const robotController = { login, index, create, registerRobot, activateCockpit }

export default robotController