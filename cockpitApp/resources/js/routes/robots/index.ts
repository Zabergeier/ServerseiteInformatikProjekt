import { queryParams, type RouteQueryOptions, type RouteDefinition, type RouteFormDefinition, applyUrlDefaults } from './../../wayfinder'
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
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
export const register = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})

register.definition = {
    methods: ["get","head"],
    url: '/robots/register',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
register.url = (options?: RouteQueryOptions) => {
    return register.definition.url + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
register.get = (options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: register.url(options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
register.head = (options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: register.url(options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
    const registerForm = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: register.url(options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
        registerForm.get = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url(options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::register
 * @see app/Http/Controllers/robotController.php:51
 * @route '/robots/register'
 */
        registerForm.head = (options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: register.url({
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    register.form = registerForm
/**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
export const cockpit = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpit.url(args, options),
    method: 'get',
})

cockpit.definition = {
    methods: ["get","head"],
    url: '/robots/{robot}',
} satisfies RouteDefinition<["get","head"]>

/**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
cockpit.url = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions) => {
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

    return cockpit.definition.url
            .replace('{robot}', parsedArgs.robot.toString())
            .replace(/\/+$/, '') + queryParams(options)
}

/**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
cockpit.get = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'get'> => ({
    url: cockpit.url(args, options),
    method: 'get',
})
/**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
cockpit.head = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteDefinition<'head'> => ({
    url: cockpit.url(args, options),
    method: 'head',
})

    /**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
    const cockpitForm = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
        action: cockpit.url(args, options),
        method: 'get',
    })

            /**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
        cockpitForm.get = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cockpit.url(args, options),
            method: 'get',
        })
            /**
* @see \App\Http\Controllers\robotController::cockpit
 * @see app/Http/Controllers/robotController.php:76
 * @route '/robots/{robot}'
 */
        cockpitForm.head = (args: { robot: number | { id: number } } | [robot: number | { id: number } ] | number | { id: number }, options?: RouteQueryOptions): RouteFormDefinition<'get'> => ({
            action: cockpit.url(args, {
                        [options?.mergeQuery ? 'mergeQuery' : 'query']: {
                            _method: 'HEAD',
                            ...(options?.query ?? options?.mergeQuery ?? {}),
                        }
                    }),
            method: 'get',
        })
    
    cockpit.form = cockpitForm
const robots = {
    index: Object.assign(index, index),
create: Object.assign(create, create),
register: Object.assign(register, register),
cockpit: Object.assign(cockpit, cockpit),
}

export default robots