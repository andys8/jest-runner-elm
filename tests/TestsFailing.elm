module TestsFailing exposing (..)

import Example
import Expect
import String
import Test exposing (..)


ultimateTest : Test
ultimateTest =
    test "the ultimate answer is 41" <|
        \() ->
            Example.ultimateAnswer
                |> Expect.equal 41
