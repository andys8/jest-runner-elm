module TestsFailing exposing (..)

import Char
import Example
import Expect
import Fuzz exposing (..)
import String
import Test exposing (..)


ultimateTest : Test
ultimateTest =
    test "the ultimate answer is 41" <|
        \() ->
            Example.ultimateAnswer
                |> Expect.equal 41
