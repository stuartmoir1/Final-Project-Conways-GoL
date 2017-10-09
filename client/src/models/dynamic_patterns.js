
export const dynamicPatterns = (rowLen) => {
  //console.log('dynamicPatterns...')

if (rowLen === 10){
  return [
    {
      "name": "",
      "cells": []
    },
    {
      "name": "Blinker",
      "cells": [12, 22, 32]
    },
    {
      "name": "Toad",
      "cells": [22, 23, 24, 31, 32, 33]
    },
    {
      "name": "Beacon",
      "cells": [11, 12, 21, 22, 33, 34, 43, 44]
    },
    {
      "name": "Glider",
      "cells": [1, 12, 20, 21, 22]
    },
    {
      "name": "Lightweight spaceship",
      "cells": [0, 3, 14, 20, 24, 31, 32, 33, 34]
    }
  ]
}

if (rowLen === 20){
  return [
    {
      "name": "",
      "cells": []
    },
    {
      "name": "Blinker",
      "cells": [22, 42, 62]
    },
    {
      "name": "Toad",
      "cells": [42, 43, 44, 61, 62, 63]
    },
    {
      "name": "Beacon",
      "cells": [21, 22, 41, 42, 63, 64, 83, 84]
    },
    {
      "name": "Glider",
      "cells": [1, 22, 40, 41, 42]
    },
    {
      "name": "Lightweight spaceship",
      "cells": [0, 3, 24, 40, 44, 61, 62, 63, 64]
    }
    {
      "name": "Pulsar",
      "cells": [44, 45, 46, 51, 52, 53, 82, 87, 90, 95, 102, 107, 110, 115, 122, 127, 130, 135, 144, 145, 146, 151, 152, 153, 184, 185, 186, 191, 192, 193, 202, 207, 210, 215, 222, 227, 230, 235, 242, 247, 250, 255, 284, 285, 286, 291, 292, 293]
    },
    {
      "name": "Pentadecathlon",
      "cells": [26, 46, 65, 66, 67, 125, 126, 127, 146, 166, 186, 206, 225, 226, 227, 285, 286, 287, 306, 326]
    }
  ]
}

if (rowLen === 40){
  return [
    {
      "name": "",
      "cells": []
    },
    {
      "name": "Gosper's Glider Gun",
      "cells": []
    }
  ]
}



//   if (rowLen === 10){
//     return [
//       {
//         "name": "",
//         "cells": []
//       },
//       {
//         "name": "Blinker",
//         "cells": [false, false, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//       },
//       {
//         "name": "Toad",
//         "cells": [false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//       },
//       {
//         "name": "Beacon",
//         "cells": [false, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false, false, false, false, true, true, false, false, false, false, false]
//       },
//       {
//         "name": "Glider",
//         "cells": [false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, false, false, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//       },
//       {
//         "name": "Lightweight spaceship",
//         "cells": [true, false, false, true, false, false, false, false, false, false, false, false, false, false, true, false, false, false, false, false, true, false, false, false, true, false, false, false, false, false, false, true, true, true, true, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false]
//       }
//     ]
//   }

//   if (rowLen === 20){
//     return [
//       {
//         "name": "",
//         "cells": []
//       },
//       {
//         "name": "Blinker",
//         "cells": [
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           true,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           true,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           true,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false,
//           false
//           ]
//       },
//       {
//         "name": "Toad",
//         "cells": [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false
//         ]
//       },
//       {
//         "name": "Beacon",
//         "cells": [
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false
//         ]
//       },
//       {
//         "name": "Glider",
//         "cells": [
//         false,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         true,
//         true,
//         true,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         false,
//         101
//         102
//         103
//         104
//         105
//         106
//         107
//         108
//         109
//         110
//         111
//         112
//         113
//         114
//         115
//         116
//         117
//         118
//         119
//         120
//         121
//         122
//         123
//         124
//         125
//         126
//         127
//         128
//         129
//         130
//         131
//         132
//         133
//         134
//         135
//         136
//         137
//         138
//         139
//         140
//         141
//         142
//         143
//         144
//         145
//         146
//         147
//         148
//         149
//         150
//         151
//         152
//         153
//         154
//         155
//         156
//         157
//         158
//         159
//         160
//         161
//         162
//         163
//         164
//         165
//         166
//         167
//         168
//         169
//         170
//         171
//         172
//         173
//         174
//         175
//         176
//         177
//         178
//         179
//         180
//         181
//         182
//         183
//         184
//         185
//         186
//         187
//         188
//         189
//         190
//         191
//         192
//         193
//         194
//         195
//         196
//         197
//         198
//         199
//         ]
//       },
//       {
//         "name": "Lightweight spaceship",
//         "cells": [
//         true,
//         1
//         2
//         true,
//         4
//         5
//         6
//         7
//         8
//         9
//         10
//         11
//         12
//         13
//         14
//         15
//         16
//         17
//         18
//         19
//         20
//         21
//         22
//         23
//         true,
//         25
//         26
//         27
//         28
//         29
//         30
//         31
//         32
//         33
//         34
//         35
//         36
//         37
//         38
//         39
//         true,
//         41
//         42
//         43
//         true,
//         45
//         46
//         47
//         48
//         49
//         50
//         51
//         52
//         53
//         54
//         55
//         56
//         57
//         58
//         59
//         60
//         true,
//         true,
//         true,
//         true,
//         65
//         66
//         67
//         68
//         69
//         70
//         71
//         72
//         73
//         74
//         75
//         76
//         77
//         78
//         79
//         80
//         81
//         82
//         83
//         84
//         85
//         86
//         87
//         88
//         89
//         90
//         91
//         92
//         93
//         94
//         95
//         96
//         97
//         98
//         99
//         100
//         101
//         102
//         103
//         104
//         105
//         106
//         107
//         108
//         109
//         110
//         111
//         112
//         113
//         114
//         115
//         116
//         117
//         118
//         119
//         120
//         121
//         122
//         123
//         124
//         125
//         126
//         127
//         128
//         129
//         130
//         131
//         132
//         133
//         134
//         135
//         136
//         137
//         138
//         139
//         140
//         141
//         142
//         143
//         144
//         145
//         146
//         147
//         148
//         149
//         150
//         151
//         152
//         153
//         154
//         155
//         156
//         157
//         158
//         159
//         160
//         161
//         162
//         163
//         164
//         165
//         166
//         167
//         168
//         169
//         170
//         171
//         172
//         173
//         174
//         175
//         176
//         177
//         178
//         179
//         180
//         181
//         182
//         183
//         184
//         185
//         186
//         187
//         188
//         189
//         190
//         191
//         192
//         193
//         194
//         195
//         196
//         197
//         198
//         199
//         200
//         ]
//       }
//       {
//         "name": "Pulsar",
//         "cells": [
//         0
//         1
//         2
//         3
//         4
//         5
//         6
//         7
//         8
//         9
//         10
//         11
//         12
//         13
//         14
//         15
//         16
//         17
//         18
//         19
//         20
//         21
//         22
//         23
//         24
//         25
//         26
//         27
//         28
//         29
//         30
//         31
//         32
//         33
//         34
//         35
//         36
//         37
//         38
//         39
//         40
//         41
//         42
//         43
//         true,
//         true,
//         true,
//         47
//         48
//         49
//         50
//         true,
//         true,
//         true,
//         54
//         55
//         56
//         57
//         58
//         59
//         60
//         61
//         62
//         63
//         64
//         65
//         66
//         67
//         68
//         69
//         70
//         71
//         72
//         73
//         74
//         75
//         76
//         77
//         78
//         79
//         80
//         81
//         true,
//         83
//         84
//         85
//         86
//         true,
//         88
//         89
//         true,
//         91
//         92
//         93
//         94
//         true,
//         96
//         97
//         98
//         99
//         100
//         101
//         true,
//         103
//         104
//         105
//         106
//         true,
//         108
//         109
//         true,
//         111
//         112
//         113
//         114
//         true,
//         116
//         117
//         118
//         119
//         120
//         121
//         true,
//         123
//         124
//         125
//         126
//         true,
//         128
//         129
//         true,
//         131
//         132
//         133
//         134
//         true,
//         136
//         137
//         138
//         139
//         140
//         141
//         142
//         143
//         true,
//         true,
//         true,
//         147
//         148
//         149
//         150
//         true,
//         true,
//         true,
//         154
//         155
//         156
//         157
//         158
//         159
//         160
//         161
//         162
//         163
//         164
//         165
//         166
//         167
//         168
//         169
//         170
//         171
//         172
//         173
//         174
//         175
//         176
//         177
//         178
//         179
//         180
//         181
//         182
//         183
//         true,
//         true,
//         true,
//         187
//         188
//         189
//         190
//         true,
//         true,
//         true,
//         194
//         195
//         196
//         197
//         198
//         199
//         200
//         201
//         true,
//         203
//         204
//         205
//         206
//         true,
//         208
//         209
//         true,
//         211
//         212
//         213
//         214
//         true,
//         216
//         217
//         218
//         219
//         220
//         221
//         true,
//         223
//         224
//         225
//         226
//         true,
//         228
//         229
//         true,
//         231
//         232
//         233
//         234
//         true,
//         236
//         237
//         238
//         239
//         240
//         241
//         true,
//         243
//         244
//         245
//         246
//         true,
//         248
//         249
//         true,
//         251
//         252
//         253
//         254
//         true,
//         256
//         257
//         258
//         259
//         260
//         261
//         262
//         263
//         264
//         265
//         266
//         267
//         268
//         269
//         270
//         271
//         272
//         273
//         274
//         275
//         276
//         277
//         278
//         279
//         280
//         281
//         282
//         283
//         true,
//         true,
//         true,
//         287
//         288
//         289
//         290
//         true,
//         true,
//         true,
//         294
//         295
//         296
//         297
//         298
//         299
//         300
//         301
//         302
//         303
//         304
//         305
//         306
//         307
//         308
//         309
//         310
//         311
//         312
//         313
//         314
//         315
//         316
//         317
//         318
//         319
//         320
//         321
//         322
//         323
//         324
//         325
//         326
//         326
//         327
//         328
//         329
//         330
//         331
//         332
//         333
//         334
//         335
//         336
//         337
//         338
//         339
//         340
//         341
//         342
//         343
//         344
//         345
//         346
//         347
//         348
//         349
//         350
//         351
//         352
//         353
//         354
//         355
//         356
//         357
//         358
//         359
//         360
//         361
//         362
//         363
//         364
//         365
//         366
//         367
//         368
//         369
//         370
//         371
//         372
//         373
//         374
//         375
//         376
//         377
//         378
//         379
//         380
//         381
//         382
//         383
//         384
//         385
//         386
//         387
//         388
//         389
//         390
//         391
//         392
//         393
//         394
//         395
//         396
//         397
//         398
//         399
//         ]
//       }
//       {
//         "name": "Pentadecathlon",
//         "cells": [
//         0
//         1
//         2
//         3
//         4
//         5
//         6
//         7
//         8
//         9
//         10
//         11
//         12
//         13
//         14
//         15
//         16
//         17
//         18
//         19
//         20
//         21
//         22
//         23
//         24
//         25
//         true,
//         27
//         28
//         29
//         30
//         31
//         32
//         33
//         34
//         35
//         36
//         37
//         38
//         39
//         40
//         41
//         42
//         43
//         44
//         45
//         true,
//         47
//         48
//         49
//         50
//         51
//         52
//         53
//         54
//         55
//         56
//         57
//         58
//         59
//         60
//         61
//         62
//         63
//         64
//         true,
//         true,
//         true,
//         68
//         69
//         70
//         71
//         72
//         73
//         74
//         75
//         76
//         77
//         78
//         79
//         80
//         81
//         82
//         83
//         84
//         85
//         86
//         87
//         88
//         89
//         90
//         91
//         92
//         93
//         94
//         95
//         96
//         97
//         98
//         99
//         100
//         101
//         102
//         103
//         104
//         105
//         106
//         107
//         108
//         109
//         110
//         111
//         112
//         113
//         114
//         115
//         116
//         117
//         118
//         119
//         120
//         121
//         122
//         123
//         124
//         true,
//         true,
//         true,
//         128
//         129
//         130
//         131
//         132
//         133
//         134
//         135
//         136
//         137
//         138
//         139
//         140
//         141
//         142
//         143
//         144
//         145
//         true,
//         147
//         148
//         149
//         150
//         151
//         152
//         153
//         154
//         155
//         156
//         157
//         158
//         159
//         160
//         161
//         162
//         163
//         164
//         165
//         true,
//         167
//         168
//         169
//         170
//         171
//         172
//         173
//         174
//         175
//         176
//         177
//         178
//         179
//         180
//         181
//         182
//         183
//         184
//         185
//         true,
//         187
//         188
//         189
//         190
//         191
//         192
//         193
//         194
//         195
//         196
//         197
//         198
//         199
//         200
//         201
//         202
//         203
//         204
//         205
//         true
//         207
//         208
//         209
//         210
//         211
//         212
//         213
//         214
//         215
//         216
//         217
//         218
//         219
//         220
//         221
//         222
//         223
//         224
//         true
//         true
//         true
//         228
//         229
//         230
//         231
//         232
//         233
//         234
//         235
//         236
//         237
//         238
//         239
//         240
//         241
//         242
//         243
//         244
//         245
//         246
//         247
//         248
//         249
//         250
//         251
//         252
//         253
//         254
//         255
//         256
//         257
//         258
//         259
//         260
//         261
//         262
//         263
//         264
//         265
//         266
//         267
//         268
//         269
//         270
//         271
//         272
//         273
//         274
//         275
//         276
//         277
//         278
//         279
//         280
//         281
//         282
//         283
//         284
//         true,
//         true,
//         true,
//         288
//         289
//         290
//         291
//         292
//         293
//         294
//         295
//         296
//         297
//         298
//         299
//         300
//         301
//         302
//         303
//         304
//         305
//         true,
//         307
//         308
//         309
//         310
//         311
//         312
//         313
//         314
//         315
//         316
//         317
//         318
//         319
//         320
//         321
//         322
//         323
//         324
//         325
//         true,
//         327
//         328
//         329
//         330
//         331
//         332
//         333
//         334
//         335
//         336
//         337
//         338
//         339
//         340
//         341
//         342
//         343
//         344
//         345
//         346
//         347
//         348
//         349
//         350
//         351
//         352
//         353
//         354
//         355
//         356
//         357
//         358
//         359
//         360
//         361
//         362
//         363
//         364
//         365
//         366
//         367
//         368
//         369
//         370
//         371
//         372
//         373
//         374
//         375
//         376
//         377
//         378
//         379
//         380
//         381
//         382
//         383
//         384
//         385
//         386
//         386
//         387
//         388
//         389
//         390
//         391
//         392
//         393
//         394
//         395
//         396
//         397
//         398
//         399
//         ]
//       }
//     ]
//   }
// }